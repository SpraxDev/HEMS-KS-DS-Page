import { basename as getBaseName, join as joinPath, resolve as resolvePath } from 'path';
import { IContributor, IEjsData } from './global';

const isProduction = !process.argv.includes('--dev');

export const cfg = Object.freeze({
    RES_DIR: resolvePath(joinPath(__dirname, '..', 'resources')),
    OUT_DIR: resolvePath(joinPath(__dirname, '..', 'dist')),

    skipHiddenResources: true
});

const contributors: { [key: string]: IContributor } = {
    ali: {
        name: 'Ali'
    },
    anwar: {
        name: 'Anwar'
    },
    arik: {
        name: 'Arik'
    },
    jakob: {
        name: 'Jakob'
    },
    lea: {
        name: 'Lea'
    },
    lukas: {
        name: 'Lukas',
        instagram: 'lukkir_'
    },
    madeleine: {
        name: 'Madeleine'
    },
    sara: {
        name: 'Sara'
    },
    victoria: {
        name: 'Victoria'
    }
};

export const ejsData: IEjsData = {
    RES_DIR: cfg.RES_DIR,

    url: {
        root: isProduction ? 'https://hems.sprax2013.de/skulpturengarten' : cfg.OUT_DIR
    },

    mediaList: [
        {
            coords: {
                x: 320,
                y: 580
            },
            media: [
                {
                    title: 'Das Höllentor',
                    type: 'video',
                    contributors: {
                        textAuthor: getContributor('anwar'),
                        voice: getContributor('ali'),

                        imgAuthor: getContributor('lukas'),
                        videoEdit: getContributor('ali')
                    },

                    mediaFile: 'media/das_hoellentor/video.mp4',
                    pdfFile: 'media/das_hoellentor/Das%20Höllentor.pdf'
                },
                {
                    // TODO: Audio still needs fire-sounds in the background
                    title: '11.000 Menschen',
                    type: 'video',
                    contributors: {
                        textAuthor: getContributor('arik'),
                        voice: getContributor('jakob'),

                        videoAuthor: getContributor('madeleine')
                    },

                    mediaFile: 'media/11_000_menschen/video.mp4',
                    pdfFile: 'media/11_000_menschen/11.000%20Menschen.pdf'
                }
            ]
        },
        {
            coords: {
                x: 255,
                y: 545
            },
            media: [
                {
                    title: '18 Atemzüge',
                    type: 'audio',
                    contributors: {
                        textAuthor: getContributor('anwar'),
                        voice: getContributor('lea')
                    },

                    mediaFile: 'media/18_atemzuege/audio.m4a',
                    pdfFile: 'media/18_atemzuege/18%20Atemzüge.pdf'
                }
            ]
        },
        {
            coords: {
                x: 278,
                y: 94
            },
            media: [
                {
                    title: 'Wie ein kleiner Vogel mutig wurde',
                    type: 'video',
                    contributors: {
                        textAuthor: getContributor('victoria'),
                        voice: getContributor('sara'),

                        imgAuthor: getContributor('lea')
                    },

                    mediaFile: 'media/kleiner_vogel/video.mp4',
                    pdfFile: 'media/kleiner_vogel/Wie%20ein%20kleiner%20Vogel%20mutig%20wurde.pdf'
                }
            ]
        },
        {
            coords: {
                x: 823,
                y: 335
            },
            media: [
                {
                    title: 'Schuh (Lukas)',
                    type: 'video',
                    contributors: {
                        textAuthor: getContributor('lukas'),
                        voice: getContributor('lukas'),

                        imgAuthor: getContributor('lukas')
                    },

                    mediaFile: 'media/schuh/video_lukas.mp4'
                },
                {
                    title: 'Schuh (Jakob)',
                    type: 'video',
                    contributors: {
                        textAuthor: getContributor('jakob'),
                        voice: getContributor('jakob'),

                        imgAuthor: getContributor('lukas')

                    },

                    mediaFile: 'media/schuh/video_jakob.mp4'
                }
            ],

            pdfFile: 'media/schuh/Schuh%20(Lukas%20und%20Jakob).pdf'
        }
    ],

    contributorTypeName: {
        textAuthor: 'Text',
        voice: 'Eingesprochen',

        imgAuthor: 'Bild',

        videoAuthor: 'Video',
        videoEdit: 'Videobearbeitung'
    },

    getUriFile: (path: string | unknown): string => {
        if (typeof path != 'string') throw new Error('Path must be a string');

        return decodeURIComponent(getBaseName(path));
    }
};

function getContributor(name: string): IContributor {
    const result = contributors[name];

    if (!result) {
        throw new Error('Contributor does not exist');
    }

    return result;
}