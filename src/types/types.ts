export type ListItemType = {
    question_id: number;
    owner: {
        display_name: string;
        profile_image: string;
        reputation: number;
    };
    title: string;
    link: string;
    is_answered: boolean;
    creation_date: number;
};

export enum SORT {
    asc = 'asc',
    desc = 'desc',
}

export type TPostsResponse = {
    items: ListItemType[];
};
