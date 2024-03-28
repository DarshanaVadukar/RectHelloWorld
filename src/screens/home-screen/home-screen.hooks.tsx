import { useEffect, useState } from "react";
import { IHomeScreenProps } from "./home-screen.props";
import { UserDTO } from "../../redux/manage-favourites/types";
import { DEFAULT_PAGING_COUNT } from "../../utils/constant";
import { Alert } from "react-native";
import { fetchUserListAPI } from "../../api/user.api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { addToFavourite, unFavourite } from "../../redux/manage-favourites/favourite.action";
import { AnyAction } from "redux";

export const useHomeScreenHook = (): IHomeScreenProps => {
    const favoriteReducerData = useSelector(
        (state: RootState) => state.favoriteReducer.favouriteItems,
    );
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [list, setList] = useState<UserDTO[]>([]);
    const [isRefreshing, setRefresing] = useState(false);
    const [isPagingStart, setIsPagingStart] = useState(false);

    useEffect(() => { fetchUserList(false, currentPage); }, [])

    const dispatch = useDispatch();

    const addFavorite = (item: any) => {
        dispatch(addToFavourite(item) as unknown as AnyAction);
    };
    const removeFavorite = (item: any) => {
        dispatch(unFavourite(item) as unknown as AnyAction);
    };

    const fetchUserList = async (isRefresh: boolean, pageNumber: number) => {
        isRefresh ? setRefresing(true) : setIsLoading(true);
        const response = await fetchUserListAPI({
            pagingCount: DEFAULT_PAGING_COUNT,
            currentPage: pageNumber,
        });

        if (response.isSuccess) {
            setList(pageNumber === 1 ? response.data : [...list, ...response.data])
        } else if (response.error) {
            Alert.alert(response.error)
        }

        setIsPagingStart(false);
        isRefresh ? setRefresing(false) : setIsLoading(false);

    };

    const onEndReached = (): void => {

        if (isLoading || isPagingStart) {
            return;
        }
        const pageNo = currentPage + 1;
        setIsPagingStart(true);
        setCurrentPage(pageNo);
        setTimeout(() => { fetchUserList(false, pageNo); }, 1000);
    };

    const onRefresh = () => {
        setCurrentPage(1);
        setTimeout(() => { fetchUserList(false, 1) }, 1000);
    };

    return {
        isLoading,
        list: list,
        isRefreshing,
        onRefresh,
        isPagingStart,
        onEndReached,
        addFavorite,
        removeFavorite,
        favoriteReducerData,
    };
}


