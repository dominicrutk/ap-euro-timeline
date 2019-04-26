const events = {
    // columbusLandsInAmerica: {
    //     name: 'Columbus Discovers America',
    //     startYear: 1492,
    //     endYear: 1492,
    //     latitude: 22.707657,
    //     longitude: -73.895284,
    //     category: 'change',
    //     description: [
    //         {
    //             type: 'p',
    //             text: `On October 12, 1492, Christopher Columbus and his crew aboard the <em>Pinta</em> spotted land. They had discovered San Salvador (the Bahamas), which is part of the New World. This discovery allowed for Spain, and the other European countries shortly thereafter, to exploit indigenous peoples for labor. In addition, American goods could be exported to Europe in the Columbian Exchange. Columbus's discovery of the New World marked a turning point in European history as the wealth of countries quickly swelled from the riches to be found in the Americas.`
    //         },
    //         {
    //             type: 'img',
    //             image: './img/columbusFleet.jpg',
    //             caption: `Christopher Columbus's fleet of three ships: <em>La Niña</em>, <em>La Pinta</em>, and <em>Santa María</em>. <a href="https://owlcation.com/humanities/Whatever-Happened-to-the-Nia-Pinta-and-Santa-Maria">Image source</a>`
    //         }
    //     ]
    // }
    spanishArmada: {
        name: 'Spanish Armada',
        startYear: 1588,
        endYear: 1588,
        latitude: 51.139097,
        longitude: 1.913333,
        category: 'political-diplomatic',
        description: [

        ]
    },
    thirtyYearsWar: {
        name: 'Thirty Years\' War',
        startYear: 1618,
        endYear: 1684,
        latitude: 50.090233,
        longitude: 14.40164,
        category: 'political-diplomatic',
        description: [

        ]
    },
    warOfTheAustrianSuccession: {
        name: 'War of the Austrian Succession',
        startYear: 1740,
        endYear: 1748,
        latitude: 50.7753,
        longitude: 6.0839,
        category: 'political-diplomatic',
        description: [

        ]
    },
    diplomaticRevolution: {
        name: 'Diplomatic Revolution',
        startYear: 1756,
        endYear: 1756,
        latitude: 48.8048,
        longitude: 2.1203,
        category: 'political-diplomatic',
        description: [

        ]
    },
    sevenYearsWar: {
        name: 'Seven Years\' War',
        startYear: 1756,
        endYear: 1763,
        latitude: 48.8566,
        longitude: 2.3522,
        category: 'political-diplomatic',
        description: [

        ]
    },
    napoleonicWars: {
        name: 'Napoleonic Wars',
        startYear: 1803,
        endYear: 1815,
        latitude: 50.680,
        longitude: 4.412,
        category: 'political-diplomatic',
        description: [

        ]
    },
    congressOfVienna: {
        name: 'Congress of Vienna',
        startYear: 1814,
        endYear: 1815,
        latitude: 48.2082,
        longitude: 16.3738,
        category: 'political-diplomatic',
        description: [

        ]
    },
    compromiseOf1867: {
        name: 'Compromise of 1867',
        startYear: 1867,
        endYear: 1867,
        latitude: 48.2082,
        longitude: 16.3738,
        category: 'political-diplomatic',
        description: [

        ]
    },
    worldWarI: {
        name: 'World War I',
        startYear: 1914,
        endYear: 1918,
        latitude: 43.8563,
        longitude: 18.4131,
        category: 'political-diplomatic',
        description: [

        ]
    },
    worldWarII: {
        name: 'World War II',
        startYear: 1939,
        endYear: 1945,
        latitude: 49.43,
        longitude: 11.12,
        category: 'political-diplomatic',
        description: [

        ]
    },
    coldWar: {
        name: 'Cold War',
        startYear: 1947,
        endYear: 1991,
        latitude: 52.51611,
        longitude: 13.37694,
        category: 'political-diplomatic',
        description: [

        ]
    },
    septemberEleventh: {
        name: '9/11 Attacks',
        startYear: 2001,
        endYear: 2001,
        latitude: 40.711667,
        longitude: -74.013611,
        category: 'political-diplomatic',
        description: [

        ]
    },
    brexitVote: {
        name: 'Brexit Vote',
        startYear: 2016,
        endYear: 2016,
        latitude: 51.545194,
        longitude: -2.571111,
        category: 'political-diplomatic',
        description: [

        ]
    },
    marriageOfIsabellaAndFerdinand: {
        name: 'Marriage of Isabella and Ferdinand',
        startYear: 1469,
        endYear: 1469,
        latitude: 41.652778,
        longitude: -4.723611,
        category: 'political-diplomatic centralization',
        description: [

        ]
    },
    leviathan: {
        name: 'Leviathan',
        startYear: 1651,
        endYear: 1651,
        latitude: 50.9897,
        longitude: -2.8633,
        category: 'political-diplomatic centralization',
        description: [

        ]
    },
    gloriousRevolution: {
        name: 'Glorious Revolution',
        startYear: 1688,
        endYear: 1689,
        latitude: 50.452222,
        longitude: -3.556944,
        category: 'political-diplomatic centralization',
        description: [

        ]
    },
    constructionOfVersailles: {
        name: 'Construction of Versailles',
        startYear: 1676,
        endYear: 1708,
        latitude: 48.8049,
        longitude: 2.1204,
        category: 'political-diplomatic centralization',
        description: [

        ]
    },
    edictOfFontainebleau: {
        name: 'Edict of Fontainebleau',
        startYear: 1685,
        endYear: 1685,
        latitude: 48.801407,
        longitude: 2.130122,
        category: 'political-diplomatic centralization',
        description: [

        ]
    },
    enlightenedDespotism: {
        name: 'Enlightened Despotism',
        startYear: 1689,
        endYear: 1815,
        latitude: 52.4042,
        longitude: 13.0385,
        category: 'political-diplomatic centralization',
        description: [

        ]
    },
    establishmentOfPrussia: {
        name: 'Establishment of Prussia',
        startYear: 1701,
        endYear: 1701,
        latitude: 54.716667,
        longitude: 20.516667,
        category: 'political-diplomatic centralization',
        description: [

        ]
    },
    warOfTheSpanishSuccession: {
        name: 'War of the Spanish Succession',
        startYear: 1701,
        endYear: 1714,
        latitude: 52.083333,
        longitude: 5.116667,
        category: 'political-diplomatic centralization',
        description: [

        ]
    },
    foundingOfStPetersburg: {
        name: 'Founding of St. Petersburg',
        startYear: 1703,
        endYear: 1703,
        latitude: 59.9375,
        longitude: 30.308611,
        category: 'political-diplomatic centralization',
        description: [

        ]
    },
    italianUnification: {
        name: 'Italian Unification',
        startYear: 1815,
        endYear: 1870,
        latitude: 45.0703,
        longitude: 7.6869,
        category: 'political-diplomatic centralization',
        description: [

        ]
    },
    germanUnification: {
        name: 'German Unification',
        startYear: 1862,
        endYear: 1871,
        latitude: 52.520008,
        longitude: 13.404954,
        category: 'political-diplomatic centralization',
        description: [

        ]
    },
    formationOfTheEuropeanUnion: {
        name: 'Formation of the European Union',
        startYear: 1993,
        endYear: 1993,
        latitude: 50.8503,
        longitude: 4.3517,
        category: 'political-diplomatic centralization',
        description: [

        ]
    },
    puritanRepublic: {
        name: 'Puritan Republic',
        startYear: 1649,
        endYear: 1660,
        latitude: 51.4995,
        longitude: 0.1248,
        category: 'political-diplomatic sovereignty',
        description: [

        ]
    },
    twoTreatisesOfGovernment: {
        name: 'Two Treatises of Government',
        startYear: 1690,
        endYear: 1690,
        latitude: 51.7565,
        longitude: 0.2107,
        category: 'political-diplomatic sovereignty',
        description: [

        ]
    },
    spiritOfLaws: {
        name: 'Spirit of Laws',
        startYear: 1748,
        endYear: 1748,
        latitude: 44.6815,
        longitude: 0.5278,
        category: 'political-diplomatic sovereignty',
        description: [

        ]
    },
    theSocialContract: {
        name: 'The Social Contract',
        startYear: 1762,
        endYear: 1762,
        latitude: 49.1277,
        longitude: 2.6978,
        category: 'political-diplomatic sovereignty',
        description: [

        ]
    },
    americanRevolution: {
        name: 'American Revolution',
        startYear: 1765,
        endYear: 1783,
        latitude: 39.948889,
        longitude: -75.15,
        category: 'political-diplomatic sovereignty',
        description: [

        ]
    },
    formationOfTheNationalAssembly: {
        name: 'Formation of the National Assembly',
        startYear: 1789,
        endYear: 1789,
        latitude: 47.3184,
        longitude: 5.0415,
        category: 'political-diplomatic sovereignty',
        description: [

        ]
    },
    declarationOfTheRightOfManAndCitizen: {
        name: 'Declaration of the Rights of Man and Citizen',
        startYear: 1789,
        endYear: 1789,
        latitude: 48.8006034642,
        longitude: 2.120999516,
        category: 'political-diplomatic sovereignty',
        description: [

        ]
    },
    establishmentOfTheFirstFrenchRepublic: {
        name: 'Establishment of the First French Republic',
        startYear: 1789,
        endYear: 1789,
        latitude: 48.8656,
        longitude: 2.3212,
        category: 'political-diplomatic sovereignty',
        description: [

        ]
    },
    latinAmericanIndependence: {
        name: 'Latin American Independence',
        startYear: 1804,
        endYear: 1824,
        latitude: -22.9068,
        longitude: -43.1729,
        category: 'political-diplomatic sovereignty',
        description: [

        ]
    },
    revolutionsOf1848: {
        name: 'Revolutions of 1848',
        startYear: 1848,
        endYear: 1848,
        latitude: 47.4979,
        longitude: 19.0402,
        category: 'political-diplomatic sovereignty',
        description: [

        ]
    },
};
