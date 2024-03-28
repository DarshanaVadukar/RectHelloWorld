import { navigationRef } from "./api-navigator-apisauce";

export function resetRoot(screenName: string, params: any = {}) {
    if (navigationRef.isReady()) {
        navigationRef.reset({
            index: 0,
            routes: [
                {
                    name : screenName,
                    params : {...params},
                },
            ]
        });
    }
}