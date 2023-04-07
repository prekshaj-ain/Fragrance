const  menuItems = [
    {
        title: 'Fragrances',
        url: '/Mist-And-Body',
        submenu: [
            {
                title: 'Mists',
                url: '/Mist-And-Body?filter=Mist'
            },
            {
                title: 'Lotions',
                url: '/Mist-And-Body?filter=Lotion'
            },
            {
                title: 'Combo',
                url: '/Mist-And-Body?filter=Combo'
            }
        ]
    },
    {
        title: 'Face',
        url: '/Face',
        submenu: [
            {
                title: 'Foundation',
                url: '/Face?filter=Foundation'
            },
            {
                title: 'Face Powder',
                url: '/Face?filter=Face-Powder'
            },
            {
                title: 'BB and CC Cream',
                url: '/Face?filter=BB-and-CC-Cream'
            }
        ]
    },
    {
        title: 'Lips',
        url: '/Lips',
        submenu: [
            {
                title: 'Lip Crayons',
                url: '/Lips?filter=Lip-Crayon'
            },
            {
                title: 'Liquid Lipsticks',
                url: '/Lips?filter=Liquid-Lipstick'
            },
            {
                title: 'Lip Balms',
                url: '/Lips?filter=Lip-Balm'
            }
        ]
    },
    {
        title: 'Eyes',
        url: '/Eyes',
        submenu: [
            {
                title: 'Eyeliners',
                url: '/Eyes?filter=Eyeliner'
            },
            {
                title: 'Kajals',
                url: '/Eyes?filter=Kajal',
            },
            {
                title: 'Eyeshadows',
                url: '/Eyes?filter=Eyeshadow'
            },
            {
                title: 'Eye Care',
                url: '/Eyes?filter=Eye-Care'
            }
        ]
    },
    {
        title: 'Nails',
        url: '/Nails',
    },
    {
        title: 'Hair',
        url: '/Hair'
    },
    {
        title: 'Skincare',
        url: '/Skincare',
        submenu: [
            {
                title: 'Face Wash',
                url: '/Skincare?filter=Facewash'
            },
            {
                title: 'Sheet Masks',
                url: '/Skincare?filter=Sheet-Mask' 
            },
            {
                title: 'Scrubs',
                url: '/Skincare?filter=Scrub'
            },
            {
                title: 'Moisturizers',
                url: '/Skincare?filter=Moisturizer'
            },
            {
                title: 'Nose Strips',
                url: '/Skincare?filter=Nose-Strip'
            },
            {
                title: 'Masks',
                url: '/Skincare?filter=Mask'
            }
        ]
    },
    {
        title: 'Accessories',
        url: '/Accessories',
    },
]

export default menuItems;