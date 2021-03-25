export interface Image {
    height: string;
    width: string;
    url: string;
};

type ImageTypes = 'fixed_height' | 'original';

export interface Gif {
    url: string;
    id: string;
    title: string;
    images: Record<ImageTypes, Image>;
};

