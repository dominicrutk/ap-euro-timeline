const events = {
    spanishArmada: {
        name: 'Spanish Armada',
        startYear: 1588,
        endYear: 1588,
        latitude: 51.139097,
        longitude: 1.913333,
        category: 'political-diplomatic',
        description: [
            {
                type: 'p',
                text: `Spain sends 130 ships to invade England and restore Catholic rule. England defeats the invasion, sinking over one third of the Spanish fleet and ending Spain's status as the chief European power.`
            }
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
            {
                type: 'p',
                text: `A religious conflict between Catholic and Protestant powers devolves into a continental war that ravages the German countryside. The resulting Peace of Westphalia gives Calvinists basic legal protections that they lacked under the Peace of Augsburg.`
            }
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
            {
                type: 'p',
                text: `France and Prussia attempt to challenge Maria Theresa's claim to the Holy Roman Emperor's throne and invade. The war ends near a stalemate, but leads to the Seven Years' War shortly thereafter.`
            }
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
            {
                type: 'p',
                text: `The alliance between the great powers of Europe realigns from Britain and Austria versus France and Prussia to Britain and Prussia versus France and Austria. The new alliances fight in the Seven Years' War.`
            }
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
            {
                type: 'p',
                text: `The new alliances created during the Diplomatic Revolution fight in a global war. France loses much of its territory in the New World to Britain, but Britain is left in tremendous debt, which ultimately leads to the American Revolution.`
            }
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
            {
                type: 'p',
                text: `Napoleon conquers much of Europe, spreading his Enlightened ideals like the Napoleonic code all over the continent. He is defeated by a coalition of other great powers at the Battle of Waterloo. Europe seeks to avoid revolutions and maintain the balance of power to prevent it from ever happening again.`
            }
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
            {
                type: 'p',
                text: `Led by Austrian diplomat Kemlens von Metternich, the European powers band together to try to avoid another revolution that leads to dictatorship and conquest. The resulting Concert of Europe prevents revolutions through 1848, when nationalism begins to surge in Europe.`
            }
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
            {
                type: 'p',
                text: `The Austrian Empire is divided into two countries: the Austrian Empire and the Kingdom of Hungary. Although each country has its own monarchy, Franz Joseph I is the ruler of both states, so they are essentially still unified. `
            }
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
            {
                type: 'p',
                text: `The "Great War" is caused by a variety of factors including militarism, alliances, imperialism, and nationalism. Germany and the other Central Powers lose the war. The Ottoman and Austrian empires collapse and Germany is significantly weakened, fundamentally altering the balance of power in Europe. Germany is also handed an economic crisis that leads to World War II.`
            }
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
            {
                type: 'p',
                text: `Adolf Hitler leads Germany on a conquest of continental Europe. Consisting of a German alliance with Italy and Japan, the Axis Powers ravage much of the world in the deadliest war in human history. They are defeated by an alliance of the Soviet Union, Great Britain, and the United States. The resulting division of Germany begins the Cold War.`
            }
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
            {
                type: 'p',
                text: `The Western Powers led by the United States indirectly combat the Eastern Powers led by the Soviet Union. The war represents a conflict of democracy and capitalism versus communism. The collapse of the Soviet Union in 1991 leaves the United States as the world's sole remaining superpower. In addition, the dependence of the Western Powers on the United States marks the end of Great Britain's status as the chief superpower of the world.`
            }
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
            {
                type: 'p',
                text: `On September 11, 2001, terrorists from Al-Qaeda hijack planes and fly them into the World Trade Center, the Pentagon, and a field in Pennsylvania. The attacks kill nearly 3,000 people and lead to the United States and its allies entering wars in Afghanistan and Iraq.`
            }
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
            {
                type: 'p',
                text: `Britain votes by a narrow margin to leave the European Union. Although the process has not been completed as of the time of writing, this represents a surge in nationalism during the 21st century unseen since the end of World War II.`
            }
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
            {
                type: 'p',
                text: `Isabella I of Castile and Ferdinand II of Aragon get married. This prompts the unification of Castile and Aragon into Spain under the rule of their son, Charles I of Spain (also known as Charles V of the Holy Roman Empire).`
            }
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
            {
                type: 'p',
                text: `English Civil War thinker Thomas Hobbes publishes his seminal work, the Leviathan. It is the first major work on social contract theory. It describes how the rulers get their power from the consent of the governed. However, Hobbes' take on social contract theory claims that one powerful ruler is necessary to have a secure state.`
            }
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
            {
                type: 'p',
                text: `William of Orange peacefully overthrows the English monarch, James II of England, with the support of Parliament. He becomes William III of England and gives more power to the aristocracy.`
            }
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
            {
                type: 'p',
                text: `Louis XIV of France builds his majestic palace, Versailles, on the outskirts of Paris. The palace represents his absolutist rule.`
            }
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
            {
                type: 'p',
                text: `Louis XIV repeals the Edict of Nantes with the Edict of Fontainebleau. Huguenots flee France, but there is a stronger sense of political unity.`
            }
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
            {
                type: 'p',
                text: `Rulers such as Frederick II of Prussia, Joseph II of Austria, and Catherine II of Russia, collectively known as "Enlightened Despots", rule as absolutists, but spread some Enlightened ideals to their respective countries. For instance, Frederick the Great used merit rather than birth as a basis for awarding jobs.`
            }
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
            {
                type: 'p',
                text: `Under the leadership of the House of Hohenzollern, various German territories are united as the Kingdom of Prussia.`
            }
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
            {
                type: 'p',
                text: `After the death of Charles II of Spain, the Habsburg and Bourbon dynasties fight for control of the Spanish empire. Philip V (a Bourbon), eventually takes the throne and renounces his place in the French line of succession.`
            }
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
            {
                type: 'p',
                text: `Much like the construction of Versailles did for France, the creation of St. Petersburg represents the absolutism practiced by Peter the Great of Russia.`
            }
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
            {
                type: 'p',
                text: `Led by the Kingdom of Piedmont-Sardinia and with the support of the French, the Italian states are unified into monarchy under the King of Piedmont, Victor Emmanuel II.`
            }
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
            {
                type: 'p',
                text: `Under the leadership of Otto von Bismarck, Prussia wins the Austro-Prussian and Franco-Prussian wars. Bismarck unites most ethnic Germans, excluding Austrians, under one umbrella using the Kleindeutschland (smaller Germany) plan.`
            }
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
            {
                type: 'p',
                text: `After the destruction of World War II, the European states attempt to integrate their politics and economies tightly so that another large war is unfathomable.`
            }
        ]
    },
    puritanRepublic: {
        name: 'Puritan Republic',
        startYear: 1649,
        endYear: 1660,
        latitude: 51.4995,
        longitude: -0.1248,
        category: 'political-diplomatic sovereignty',
        description: [
            {
                type: 'p',
                text: `Charles I of England is executed and England is ruled as a republic under the leadership of Oliver Cromwell.`
            }
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
            {
                type: 'p',
                text: `John Locke publishes his take on social contract theory. He claims that rulers need the consent of the governed to get power and that people have natural rights.`
            }
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
            {
                type: 'p',
                text: `Montesquieu publishes his seminal work, The Spirit of Laws. It details why a republic is the best form of government.`
            }
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
            {
                type: 'p',
                text: `Jean-Jacques Rousseau publishes his book on social contract theory. It describes how a ruler must have the consent of the governed and how laws should be based on the "general will". That is, the consensus of the rational people. The book is part of the inspiration for the French Revolution.`
            }
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
            {
                type: 'p',
                text: `After the British impose harsh taxes on the Americans to pay for the Seven Years' War, the Americans rebel and become independent. This inspires the French Revolution, and America eventually becomes to a powerful Western ally.`
            }
        ]
    },
    formationOfTheNationalAssembly: {
        name: 'Formation of the National Assembly',
        startYear: 1789,
        endYear: 1789,
        latitude: 48.852,
        longitude: 2.3615,
        category: 'political-diplomatic sovereignty',
        description: [
            {
                type: 'p',
                text: `The Third Estate (the people) becomes more powerful than the First (the Church) and the Second (the aristocracy). This leads to meaningful change like the Declaration of the Rights of Man and Citizen.`
            }
        ]
    },
    declarationOfTheRightsOfManAndCitizen: {
        name: 'Declaration of the Rights of Man and Citizen',
        startYear: 1789,
        endYear: 1789,
        latitude: 48.8006034642,
        longitude: 2.120999516,
        category: 'political-diplomatic sovereignty',
        description: [
            {
                type: 'p',
                text: `Moderate liberal ideals like equity and freedom are recorded in a document that becomes one of the goals of the French Revolution. The Declaration of the Rights of Man and Citizen inspires the ideals in the Declaration of Independence.`
            }
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
            {
                type: 'p',
                text: `France establishes one of the first true republics in the world.`
            }
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
            {
                type: 'p',
                text: `The Latin American states break free of Spanish and Portuguese rule.`
            }
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
            {
                type: 'p',
                text: `Nationalist movements all over Europe rise up in revolution. Although most of them fail, this is typically seen as the end of the Concert of Europe because the great powers think they have beaten revolution, so they go back to fighting each other.`
            }
        ]
    },
    greatPeasantsRevolt: {
        name: 'Great Peasants\' Revolt',
        startYear: 1524,
        endYear: 1525,
        latitude: 51.5742,
        longitude: 0.4857,
        category: 'economic-social',
        description: [
            {
                type: 'p',
                text: `Thousands of peasants across the Holy Roman Empire rise up in revolt against their masters. Martin Luther sides with the aristocracy, who he needs for protection from the Holy Roman Emperor.`
            }
        ]
    },
    frenchRevolution: {
        name: 'French Revolution',
        startYear: 1789,
        endYear: 1799,
        latitude: 48.8520,
        longitude: 2.3677,
        category: 'economic-social',
        description: [
            {
                type: 'p',
                text: `The Parisian middle class rises up against the nobility and the monarchy because of their lack of privileges, despite their wealth. They topple the Old Regime and establish a republic. Shortly after the revolution, Napoleon Bonaparte becomes a dictator. His rule and conquest of Europe leads to the Congress of Vienna.`
            }
        ]
    },
    treatyOfVersailles: {
        name: 'Treaty of Versailles',
        startYear: 1918,
        endYear: 1918,
        latitude: 48.801407,
        longitude: 2.130122,
        category: 'economic-social',
        description: [
            {
                type: 'p',
                text: `The Treaty of Versailles ends World War I. It puts all the blame on Germany and forces it to pay reparations for the war. This sends Germany into an economic crisis which leads to Hitler's rise to power and World War II.`
            }
        ]
    },
    germanHyperinflation: {
        name: 'German Hyperinflation',
        startYear: 1921,
        endYear: 1923,
        latitude: 50.10916623,
        longitude: 8.67333064,
        category: 'economic-social',
        description: [
            {
                type: 'p',
                text: `The German currency experiences hyperinflation which leads to mass poverty and starvation. The German economy is in shambles, which allows Hitler to rise to power.`
            }
        ]
    },
    holocaust: {
        name: 'Holocaust',
        startYear: 1933,
        endYear: 1945,
        latitude: 50.0274,
        longitude: 19.2020,
        category: 'economic-social',
        description: [
            {
                type: 'p',
                text: `Hitler and the Nazi Regime persecute Jews, Roma, disabled people, black people, and more. The persecution results in the systematic killing of over 6,000,000 people.`
            }
        ]
    },
    decolonization: {
        name: 'Decolonization',
        startYear: 1945,
        endYear: 1960,
        latitude: 28.6139,
        longitude: 77.2090,
        category: 'economic-social',
        description: [
            {
                type: 'p',
                text: `The remaining powers, especially Great Britain, give up their overseas empires after the end of World War II.`
            }
        ]
    },
    columbusDiscoversAmerica: {
        name: 'Columbus Discovers America',
        startYear: 1492,
        endYear: 1492,
        latitude: 22.707657,
        longitude: -73.895284,
        category: 'economic-social economic-systems',
        description: [
            {
                type: 'p',
                text: `Spanish explorer Christopher Columbus lands in the New World, setting off a wave of exploration and mercantile empires.`
            }
        ]
    },
    transatlanticSlaveTrade: {
        name: 'Transatlantic Slave Trade',
        startYear: 1526,
        endYear: 1814,
        latitude: 13.441243,
        longitude: -16.719776,
        category: 'economic-social economic-systems',
        description: [
            {
                type: 'p',
                text: `Europe sells weapons to Africa, which sells slaves to the Americas, which sell raw materials back to Europe.`
            }
        ]
    },
    dutchGoldenAge: {
        name: 'Dutch Golden Age',
        startYear: 1600,
        endYear: 1750,
        latitude: 52.3680,
        longitude: 4.9036,
        category: 'economic-social economic-systems',
        description: [
            {
                type: 'p',
                text: `The unregulated Dutch economy is incredibly prosperous until other countries catch up to their shipbuilding techniques and capitalist policies during the Industrial Revolution.`
            }
        ]
    },
    agriculturalRevolution: {
        name: 'Agricultural Revolution',
        startYear: 1700,
        endYear: 1850,
        latitude: 51.491280,
        longitude: 5.861834,
        category: 'economic-social economic-systems',
        description: [
            {
                type: 'p',
                text: `New technologies and methods are developed that allow for more food production. This allows the population to expand rapidly.`
            }
        ]
    },
    treatyOfUtrecht: {
        name: 'Treaty of Utrecht',
        startYear: 1713,
        endYear: 1713,
        latitude: 52.103333,
        longitude: 5.179167,
        category: 'economic-social economic-systems',
        description: [
            {
                type: 'p',
                text: `The Treaty of Utrecht bankrupts the Dutch, allowing Great Britain to surpass them in overseas trade.`
            }
        ]
    },
    enclosure: {
        name: 'Enclosure',
        startYear: 1760,
        endYear: 1832,
        latitude: 54.4667,
        longitude: 3.2833,
        category: 'economic-social economic-systems',
        description: [
            {
                type: 'p',
                text: `The consolidation of land among the wealthy elite increases investment into agriculture, thus growing the food supply and the population.`
            }
        ]
    },
    steamEngine: {
        name: 'Invention of the Steam Engine',
        startYear: 1769,
        endYear: 1769,
        latitude: 55.871944,
        longitude: -4.2875,
        category: 'economic-social economic-systems',
        description: [
            {
                type: 'p',
                text: `The invention of the steam engine allows the textile industry to take off. The rapid growth of factories creates jobs and increases the wealth of the populace. Consumer goods become commonplace.`
            }
        ]
    },
    wealthOfNations: {
        name: 'Wealth of Nations',
        startYear: 1776,
        endYear: 1776,
        latitude: 43.6047,
        longitude: 1.4442,
        category: 'economic-social economic-systems',
        description: [
            {
                type: 'p',
                text: `Adam Smith publishes his famous work, The Wealth of Nations. It describes how removing trade barriers and deregulating the economy promotes wealth, which is the sum of the wealth of citizens, not the wealth of the government.`
            }
        ]
    },
    communistManifesto: {
        name: 'Communist Manifesto',
        startYear: 1848,
        endYear: 1848,
        latitude: 49.7500,
        longitude: 6.6371,
        category: 'economic-social economic-systems',
        description: [
            {
                type: 'p',
                text: `Karl Marx and Friedrich Engels publish their manifesto on communism. It outlines class conflict between the proletariat (the working class- factory workers) and the bourgeoisie (the middle class- factory owners). It says eventually, the proletariat will rise up against the bourgeoisie in a communist revolution.`
            }
        ]
    },
    abolitionOfRussianSerfdom: {
        name: 'Abolition of Russian Serfdom',
        startYear: 1861,
        endYear: 1861,
        latitude: 59.9343,
        longitude: 30.3351,
        category: 'economic-social economic-systems',
        description: [
            {
                type: 'p',
                text: `Alexander II of Russia abolishes serfdom saying, "better to abolish serfdom from above than to wait till it begins to abolish itself from below."`
            }
        ]
    },
    womenBeginToRead: {
        name: 'Women Begin to Read',
        startYear: 1517,
        endYear: 1648,
        latitude: 50.9663,
        longitude: 10.3063,
        category: 'economic-social gender',
        description: [
            {
                type: 'p',
                text: `Women begin to learn to read as Luther calls for each individual reading the Bible for themself.`
            }
        ]
    },
    observationsUponExperimentalPhilosophy: {
        name: 'Observations Upon Experimental Philosophy',
        startYear: 1666,
        endYear: 1666,
        latitude: 54.966667,
        longitude: -1.6,
        category: 'economic-social gender',
        description: [
            {
                type: 'p',
                text: `Margaret Cavendish publishes Observations Upon Experimental Philosophy. At the time, women are mostly excluded from the scientific pursuits.`
            }
        ]
    },
    principiaIntoFrench: {
        name: 'Émilie du Châtelet Translates Principia into French',
        startYear: 1749,
        endYear: 1749,
        latitude: 48.8566,
        longitude: 2.3522,
        category: 'economic-social gender',
        description: [
            {
                type: 'p',
                text: `Émilie du Châtelet helps to spread Newton's work by translating Principia Mathematica into French.`
            }
        ]
    },
    declarationOfTheRightsOfWoman: {
        name: 'Declaration of the Rights of Woman',
        startYear: 1791,
        endYear: 1791,
        latitude: 48.847164,
        longitude: 2.267934,
        category: 'economic-social gender',
        description: [
            {
                type: 'p',
                text: `Olympe de Gouges publishes Declaration of the Rights of Woman, a feminist version of Declaration of the Rights of Man and Citizen. She is later executed during the Reign of Terror.`
            }
        ]
    },
    womenEnterTheWorkforce: {
        name: 'Women Enter the Workforce',
        startYear: 1820,
        endYear: 1829,
        latitude: 55.66,
        longitude: -3.78,
        category: 'economic-social gender',
        description: [
            {
                type: 'p',
                text: `As the Industrial Revolution causes factories to grow, women begin to enter factories, especially in the textile industry.`
            }
        ]
    },
    marriedWomensPropertyAct: {
        name: 'Married Women\'s Property Act',
        startYear: 1882,
        endYear: 1882,
        latitude: 51.4995,
        longitude: -0.1246,
        category: 'economic-social gender',
        description: [
            {
                type: 'p',
                text: `Women make significant strides in legal and property rights. The Married Women's Property Act gives them the ability to keep property through marriage.`
            }
        ]
    },
    equalFranchiseAct: {
        name: 'Equal Franchise Act',
        startYear: 1928,
        endYear: 1928,
        latitude: 51.4992,
        longitude: -0.1248,
        category: 'economic-social gender',
        description: [
            {
                type: 'p',
                text: `Women get the right to vote in England.`
            }
        ]
    },
    councilOfTrent: {
        name: 'Council of Trent',
        startYear: 1545,
        endYear: 1563,
        latitude: 46.0748,
        longitude: 11.1217,
        category: 'cultural-intellectual',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    baroqueArt: {
        name: 'Baroque Art',
        startYear: 1600,
        endYear: 1730,
        latitude: 41.9029,
        longitude: 12.4534,
        category: 'cultural-intellectual',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    romanticEra: {
        name: 'Romantic Era',
        startYear: 1800,
        endYear: 1850,
        latitude: 48.8809,
        longitude: 2.3334,
        category: 'cultural-intellectual',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    eraOfImpressionism: {
        name: 'Era of Impressionism',
        startYear: 1870,
        endYear: 1889,
        latitude: 48.8606,
        longitude: 2.3376,
        category: 'cultural-intellectual',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    ninetyFiveTheses: {
        name: 'Ninety-five Theses',
        startYear: 1517,
        endYear: 1517,
        latitude: 51.866389,
        longitude: 12.637778,
        category: 'cultural-intellectual church-decline',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    sackOfRome: {
        name: 'Sack of Rome',
        startYear: 1527,
        endYear: 1527,
        latitude: 41.9028,
        longitude: 12.4964,
        category: 'cultural-intellectual church-decline',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    actOfSupremacy: {
        name: 'Act of Supremacy',
        startYear: 1534,
        endYear: 1534,
        latitude: 51.5014,
        longitude: -0.1419,
        category: 'cultural-intellectual church-decline',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    institutesOfTheChristianReligion: {
        name: 'Institutes of the Christian Religion',
        startYear: 1536,
        endYear: 1536,
        latitude: 46.2044,
        longitude: 6.1432,
        category: 'cultural-intellectual church-decline',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    peaceOfAugsburg: {
        name: 'Institutes of the Christian Religion',
        startYear: 1555,
        endYear: 1555,
        latitude: 48.3705,
        longitude: 10.8978,
        category: 'cultural-intellectual church-decline',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    edictOfNantes: {
        name: 'Edict of Nantes',
        startYear: 1598,
        endYear: 1598,
        latitude: 47.2184,
        longitude: -1.5536,
        category: 'cultural-intellectual church-decline',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    churchCondemnsGalileo: {
        name: 'Church Condemns Galileo',
        startYear: 1633,
        endYear: 1633,
        latitude: 43.7228,
        longitude: 10.4017,
        category: 'cultural-intellectual church-decline',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    peaceOfWestphalia: {
        name: 'Peace of Westphalia',
        startYear: 1648,
        endYear: 1648,
        latitude: 51.9607,
        longitude: 7.6261,
        category: 'cultural-intellectual church-decline',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    onTheOriginOfSpecies: {
        name: 'On the Origin of Species',
        startYear: 1859,
        endYear: 1859,
        latitude: 1.678,
        longitude: -92.003,
        category: 'cultural-intellectual church-decline',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    printingPress: {
        name: 'Invention of the Printing Press',
        startYear: 1439,
        endYear: 1439,
        latitude: 49.9929,
        longitude: 8.2473,
        category: 'cultural-intellectual innovation',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    onTheRevolutionsOfTheHeavenlySpheres: {
        name: 'On the Revolutions of the Heavenly Spheres',
        startYear: 1543,
        endYear: 1543,
        latitude: 49.45,
        longitude: 11.083333,
        category: 'cultural-intellectual innovation',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    theAdvancementOfLearning: {
        name: 'The Advancement of Learning',
        startYear: 1605,
        endYear: 1605,
        latitude: 51.504831314,
        longitude: -0.120666184,
        category: 'cultural-intellectual innovation',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    starryMessenger: {
        name: 'Starry Messenger',
        startYear: 1610,
        endYear: 1610,
        latitude: 43.7226,
        longitude: 10.4019,
        category: 'cultural-intellectual innovation',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    discourseOnMethod: {
        name: 'Discourse on Method',
        startYear: 1637,
        endYear: 1637,
        latitude: 46.9735,
        longitude: 0.6987,
        category: 'cultural-intellectual innovation',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    principiaMathematica: {
        name: 'Principia Mathematica',
        startYear: 1687,
        endYear: 1687,
        latitude: 52.8092,
        longitude: -0.6305,
        category: 'cultural-intellectual innovation',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    encyclopedia: {
        name: 'The Encyclopedia',
        startYear: 1751,
        endYear: 1751,
        latitude: 47.8668,
        longitude: 5.3343,
        category: 'cultural-intellectual innovation',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    theInterpretationOfDreams: {
        name: 'The Interpretation of Dreams',
        startYear: 1899,
        endYear: 1899,
        latitude: 49.6409,
        longitude: 18.1450,
        category: 'cultural-intellectual innovation',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    },
    creationOfTheInternet: {
        name: 'Creation of the Internet',
        startYear: 1983,
        endYear: 1983,
        latitude: 51.5072,
        longitude: -0.1277,
        category: 'cultural-intellectual innovation',
        description: [
            {
                type: 'p',
                text: ``
            }
        ]
    }
};
