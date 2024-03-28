import { API_URL, DEFAULT_PAGING_COUNT, ErrorMessages } from "../utils/constant";
import { CommonApiRes } from "./types/api-types"

export const fetchUserListAPI = async ({
    pagingCount = DEFAULT_PAGING_COUNT,
    currentPage = 1,
}): Promise<CommonApiRes> => {
    const res = await fetch(
        `${API_URL}?results=${pagingCount}&page=${currentPage}`,
    );
    const data = res.ok ? await res.json() : [];

    return {
        isSuccess: res.ok,
        data: data?.results,
        error: !res.ok ? ErrorMessages.SOMETHING_WENT_WRONG : '',
    };
};