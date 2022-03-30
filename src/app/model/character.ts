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
    /* name
real name 
the brief summary of the character

Image
Name
Real Name
Gender
Birth
Origin
Powers
Friends
Enemies
ETC */
}
