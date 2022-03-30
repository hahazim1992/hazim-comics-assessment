export interface Character {
    date_last_updated: string
    name: string;
    real_name: string;
    deck: string;
    image: {
        icon_url: string;
        medium_url: string;
        tiny_url: string;
        thumb_url: string;
        super_url: string;
    };
    id: number;
    birth: any;
    origin: {
        name: any;
    };
    description: any;
    publisher: {
        name: any;
    };
    first_appeared_in_issue: {
        name: any;
        issue_number: any;
    }
}
