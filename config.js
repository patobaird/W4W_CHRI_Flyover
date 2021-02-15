var config = {
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken: 'pk.eyJ1IjoicGF0b2JhaXJkIiwiYSI6ImNra3R3ZXM4MTQzbXMyb2xhZjBlcTI4OTAifQ.twHZP9sCH-faPcp91hzufw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Waves for Water Carribean Hurricane Relief Initiative',
    subtitle: '',
    byline: '',
    image: 'https://cdn.glitch.com/4731465c-ac1a-4510-bae3-525ed0374425%2FCopy%20of%20w4w_blk_full_transparent.png?v=1613091158759',
    footer: 'Powered by Quiver',
    chapters: [
        {
            id: 'alert-chri',
            alignment: 'left',
            hidden: false,
            title: 'Caribbean Hurricane Relief Initiative',
            image: 'https://cdn.glitch.com/4731465c-ac1a-4510-bae3-525ed0374425%2FCopy%20of%20w4w_blk_full_transparent.png?v=1613091158759',
            description: '',
            location: {
              center: [-122.48573, 37.86125],
              zoom: 10.90,
              pitch: 53.00,
              bearing: -0.01
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'launch-chri',
            alignment: 'left',
            hidden: false,
            title: 'Irma hits. CHRI Begins.',
            image: 'https://cdn.glitch.com/4731465c-ac1a-4510-bae3-525ed0374425%2Flaunchofchri.jpg?v=1612629976000',
            description: 'On September 6, 2017, the mega Category 5 hurricane, Irma, demolished Antigua and Barbuda destroying 90% of the infrastructure. The sheer mass of the storm caused destruction in over 13 of the territories within the Caribbean. Waves For Water, together with local colleagues from the region, launched an emergency response initiative to provide access to clean water to the hardest hit Virgin Islands, and some of the French Caribbean Islands.',
            location: {
                center: [-64.77189, 17.71672],
                zoom: 10.13,
                pitch: 53,
                bearing: -13.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'stt-chri',
            alignment: 'right',
            hidden: false,
            title: 'The US Virgin Islands',
            image: 'https://cdn.glitch.com/4731465c-ac1a-4510-bae3-525ed0374425%2Fstt.jpg?v=1612629988758',
            description: 'The devastation from Irma was massive Waves For Water had to focus on specific underserved local communities. With a staging operation in St Croix, Waves For Water began to implement clean water programs in St. Thomas, St. Croix, St. John, Tortola, Virgin Gorda, Anegada, Tortola, and Jost Van Dyke.',
            location: {
              center: [-64.90816, 18.31954],
              zoom: 11.28,
              pitch: 53.00,
              bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'introtopr-chri',
            alignment: 'right',
            hidden: false,
            title: 'Hurricane Maria Arrives',
            image: 'https://cdn.glitch.com/4731465c-ac1a-4510-bae3-525ed0374425%2Fintropr.jpg?v=1612629973447',
            description: 'Undergoing an explosive intensification Hurricane Maria went from a Category 1 storm to a Category 5 storm in less than 18 hours. This shift caused Waves to split teams between San Juan PR and St Croix. After Hurricane Maria, the 10th most intense storm in Atlantic history, cleared San Juan Waves For Water’s first response was to mitigate the immediate suffering of the most impacted families, by implementing portable water filtration systems in communities living at or below the poverty line.',
            location: {
              center: [-66.06403, 18.42856],
              zoom: 12.59,
              pitch: 48.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'prfullscope-chri',
            alignment: 'right',
            hidden: false,
            title: 'Focus on Puerto Rico',
            image: 'https://cdn.glitch.com/4731465c-ac1a-4510-bae3-525ed0374425%2Fprexpans.jpg?v=1612629981659',
            description: 'With catastrophic destruction across Puerto Rico the W4W team initially focused on training the first responders from Carolina and San Juan Proper, empowering them to help their own communities. At the same time assessment teams were sent to the West, South, and Central, areas of the island. These teams were able to activate small, but effective, local networks in Guayama, Salinas, Aguadilla, and others. Within the first 72 hours W4W had expanded its reach to Isabella, Rincon, Condado, Jayuya, Utuado, Yauco, Añasco, Toa Baja, Cayey, Caguas, Patillas, Loiza, Carolina, Dorado, Vega Baja, Juncos, Cidra, Aibonito, Camuy, and more, impacting thousands of people.',
            location: {
             center: [-66.24503, 17.99187],
              zoom: 8.40,
              pitch: 48.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'back2bvi-chri',
            alignment: 'right',
            hidden: false,
            title: 'Community Solutions',
            image: 'https://cdn.glitch.com/4731465c-ac1a-4510-bae3-525ed0374425%2Fbackinbvi.jpg?v=1612629923249',
            description: 'As the program grew so did Waves For Water’s solutions. After addressing the immediate need for clean water, Waves For Water focus on their second phase of disaster relief; addressing the breakdowns in water infrastructure through the creation of large and centrally-located water depots. These are big systems that can serve entire communities, rather than just one household. With new implementations happening daily in Puerto Rico and the Outer Islands Waves for Water implemented water-depot systems, across 116 communities and on 8 islands.',
            location: {
              center: [-64.70848, 18.33840],
              zoom: 10.13,
              pitch: 48.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'dominica-chri',
            alignment: 'right',
            hidden: false,
            title: 'The Journey to Dominica',
            image: 'https://cdn.glitch.com/4731465c-ac1a-4510-bae3-525ed0374425%2Fdominica.jpg?v=1612629939038',
            description: 'With a strict curfew on St Croix and very limited transportation from basecamp to the surrounding islands, Waves For Water created a mobile base of operations via sailboat allowing them to be a completely self-sustained unit: transportation, food, shelter, buckets, filters, tanks, and supplies. With 250 nautical miles in front of them, the team set off for the first island in Hurricane Maria’s path, Dominica. The destruction was catastrophic but once on the island Waves for Water was able to reach some of the hardest-hit areas, including the Kalinago Territory.',
            location: {
              center: [-61.33167, 15.40194],
              zoom: 10.39,
              pitch: 48.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sustainablefood-chri',
            alignment: 'right',
            hidden: false,
            title: 'Supporting Sustainable Food Solutions',
            image: 'https://cdn.glitch.com/4731465c-ac1a-4510-bae3-525ed0374425%2Fsustainable.jpg?v=1612629992224',
            description: 'The scope of the disaster allowed Waves For Water to expand the impact of their programming. In collaboration with local food organizations, W4W built 26 rain catchment systems supporting sustainable farms across the island. These systems not only address the water issues but also provide a substantial means of economic support as these individuals try to recover from catastrophic loss.',
            location: {
              center: [-66.48337, 18.06592],
              zoom: 8.92,
              pitch: 48.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
      {
            id: 'final-chri',
            alignment: 'right',
            hidden: false,
            title: 'Total Impact',
            image: 'https://cdn.glitch.com/4731465c-ac1a-4510-bae3-525ed0374425%2FScreen%20Shot%202021-02-11%20at%207.24.47%20PM.png?v=1613093108852',
            description: '',
            location: {
            center: [-65.86583, 18.29271],
            zoom: 8.57,
            pitch: 51.00,
            bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
            ]
};
