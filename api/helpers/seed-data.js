module.exports = {
  friendlyName: "Seed data",
  description: "",
  inputs: {
    environment: {
      required: true,
      type: "string",
      description: "Application current environment",
    },
  },

  exits: {
    success: {
      description: "All done.",
    },
  },

  fn: async function (inputs) {
    switch (inputs.environment) {
      case "development":
        await Category.createEach([
          {
            name: "Celebrity",
          },
          {
            name: "Education",
          },
          {
            name: "Entertainment",
          },
          {
            name: "Finance",
          },
          {
            name: "Food & Drink",
          },
          {
            name: "Games",
          },
          {
            name: "Health & Fitness",
          },
          {
            name: "Lifestyle",
          },
          {
            name: "Medical",
          },
          {
            name: "Music",
          },
          {
            name: "Navigation",
          },
          {
            name: "News & Politics ",
          },
          {
            name: "Photo & Video",
          },
          {
            name: "Productivity  ",
          },
          {
            name: "Reference",
          },
          {
            name: "Social Networking",
          },
          {
            name: "Sports",
          },
          {
            name: "Travel & Regional ",
          },
          {
            name: "Utilities ",
          },
          {
            name: "Weather",
          },
          {
            name: "International ",
          },
          {
            name: "Art & Photography ",
          },
          {
            name: "Automotive ",
          },
          {
            name: "Books",
          },
          {
            name: "Brides & Weddings",
          },
          {
            name: "Business & Investing",
          },
          {
            name: "Comics",
          },
          {
            name: "Children ",
          },
          {
            name: "Computer & Internet",
          },
          {
            name: "Crafts & Hobbies",
          },
          {
            name: "Electronics & Audio",
          },
          {
            name: "Fashion",
          },
          {
            name: "Literary & Journal",
          },
          {
            name: "Men's Interest",
          },
          {
            name: "Moveis",
          },
          {
            name: "Outdoor & Nature",
          },
          {
            name: "Parenting & Family",
          },
          {
            name: "Pets",
          },
          {
            name: "Professional & Trade",
          },
          {
            name: "Science",
          },
          {
            name: "Technology",
          },
          {
            name: "Teens",
          },
          {
            name: "Women's Interest",
          },
        ]);

        await User.createEach([
          {
            email: "admin@ezwaiting.com",
            password: "12345678",
            userRole: "USER_ROLE_SUPER_ADMIN",
            firstName: "Admin",
            lastName: "Admin"
          },
        ]);

        await Country.createEach([
          {
            name: "Afghanistan",
            alpha3: "AFG",
            countryCode: "004",
          },
          {
            name: "Anguilla",
            alpha3: "AIA",
            countryCode: "660",
          },
          {
            name: "Aruba",
            alpha3: "ABW",
            countryCode: "533",
          },
          {
            name: "Bahrain",
            alpha3: "BHR",
            countryCode: "048",
          },
          {
            name: "Belize",
            alpha3: "BLZ",
            countryCode: "084",
          },
          {
            name: "Bonaire, Sint Eustatius and Saba",
            alpha3: "BES",
            countryCode: "535",
          },
          {
            name: "British Indian Ocean Territory",
            alpha3: "IOT",
            countryCode: "086",
          },
          {
            name: "Cabo Verde",
            alpha3: "CPV",
            countryCode: "132",
          },
          {
            name: "Central African Republic",
            alpha3: "CAF",
            countryCode: "140",
          },
          {
            name: "Cocos (Keeling) Islands",
            alpha3: "CCK",
            countryCode: "166",
          },
          {
            name: "Cook Islands",
            alpha3: "COK",
            countryCode: "184",
          },
          {
            name: "Curaçao",
            alpha3: "CUW",
            countryCode: "531",
          },
          {
            name: "Dominica",
            alpha3: "DMA",
            countryCode: "212",
          },
          {
            name: "Equatorial Guinea",
            alpha3: "GNQ",
            countryCode: "226",
          },
          {
            name: "Falkland Islands (Malvinas)",
            alpha3: "FLK",
            countryCode: "238",
          },
          {
            name: "French Guiana",
            alpha3: "GUF",
            countryCode: "254",
          },
          {
            name: "Georgia",
            alpha3: "GEO",
            countryCode: "268",
          },
          {
            name: "Greenland",
            alpha3: "GRL",
            countryCode: "304",
          },
          {
            name: "Guernsey",
            alpha3: "GGY",
            countryCode: "831",
          },
          {
            name: "Heard Island and McDonald Islands",
            alpha3: "HMD",
            countryCode: "334",
          },
          {
            name: "Iceland",
            alpha3: "ISL",
            countryCode: "352",
          },
          {
            name: "Ireland",
            alpha3: "IRL",
            countryCode: "372",
          },
          {
            name: "Japan",
            alpha3: "JPN",
            countryCode: "392",
          },
          {
            name: "Kiribati",
            alpha3: "KIR",
            countryCode: "296",
          },
          {
            name: "Lao People's Democratic Republic",
            alpha3: "LAO",
            countryCode: "418",
          },
          {
            name: "Libya",
            alpha3: "LBY",
            countryCode: "434",
          },
          {
            name: "Madagascar",
            alpha3: "MDG",
            countryCode: "450",
          },
          {
            name: "Malta",
            alpha3: "MLT",
            countryCode: "470",
          },
          {
            name: "Mayotte",
            alpha3: "MYT",
            countryCode: "175",
          },
          {
            name: "Mongolia",
            alpha3: "MNG",
            countryCode: "496",
          },
          {
            name: "Myanmar",
            alpha3: "MMR",
            countryCode: "104",
          },
          {
            name: "New Caledonia",
            alpha3: "NCL",
            countryCode: "540",
          },
          {
            name: "Niue",
            alpha3: "NIU",
            countryCode: "570",
          },
          {
            name: "Oman",
            alpha3: "OMN",
            countryCode: "512",
          },
          {
            name: "Papua New Guinea",
            alpha3: "PNG",
            countryCode: "598",
          },
          {
            name: "Poland",
            alpha3: "POL",
            countryCode: "616",
          },
          {
            name: "Romania",
            alpha3: "ROU",
            countryCode: "642",
          },
          {
            name: "Saint Kitts and Nevis",
            alpha3: "KNA",
            countryCode: "659",
          },
          {
            name: "Samoa",
            alpha3: "WSM",
            countryCode: "882",
          },
          {
            name: "Serbia",
            alpha3: "SRB",
            countryCode: "688",
          },
          {
            name: "Slovakia",
            alpha3: "SVK",
            countryCode: "703",
          },
          {
            name: "South Georgia and the South Sandwich Islands",
            alpha3: "SGS",
            countryCode: "239",
          },
          {
            name: "Suriname",
            alpha3: "SUR",
            countryCode: "740",
          },
          {
            name: "Taiwan, Province of China",
            alpha3: "TWN",
            countryCode: "158",
          },
          {
            name: "Togo",
            alpha3: "TGO",
            countryCode: "768",
          },
          {
            name: "Turkey",
            alpha3: "TUR",
            countryCode: "792",
          },
          {
            name: "Ukraine",
            alpha3: "UKR",
            countryCode: "804",
          },
          {
            name: "Uruguay",
            alpha3: "URY",
            countryCode: "858",
          },
          {
            name: "Virgin Islands (British)",
            alpha3: "VGB",
            countryCode: "092",
          },
          {
            name: "Zambia",
            alpha3: "ZMB",
            countryCode: "894",
          },
          {
            name: "Åland Islands",
            alpha3: "ALA",
            countryCode: "248",
          },
          {
            name: "Antarctica",
            alpha3: "ATA",
            countryCode: "010",
          },
          {
            name: "Australia",
            alpha3: "AUS",
            countryCode: "036",
          },
          {
            name: "Bangladesh",
            alpha3: "BGD",
            countryCode: "050",
          },
          {
            name: "Benin",
            alpha3: "BEN",
            countryCode: "204",
          },
          {
            name: "Bosnia and Herzegovina",
            alpha3: "BIH",
            countryCode: "070",
          },
          {
            name: "Brunei Darussalam",
            alpha3: "BRN",
            countryCode: "096",
          },
          {
            name: "Cambodia",
            alpha3: "KHM",
            countryCode: "116",
          },
          {
            name: "Chad",
            alpha3: "TCD",
            countryCode: "148",
          },
          {
            name: "Colombia",
            alpha3: "COL",
            countryCode: "170",
          },
          {
            name: "Costa Rica",
            alpha3: "CRI",
            countryCode: "188",
          },
          {
            name: "Cyprus",
            alpha3: "CYP",
            countryCode: "196",
          },
          {
            name: "Dominican Republic",
            alpha3: "DOM",
            countryCode: "214",
          },
          {
            name: "Eritrea",
            alpha3: "ERI",
            countryCode: "232",
          },
          {
            name: "Faroe Islands",
            alpha3: "FRO",
            countryCode: "234",
          },
          {
            name: "French Polynesia",
            alpha3: "PYF",
            countryCode: "258",
          },
          {
            name: "Germany",
            alpha3: "DEU",
            countryCode: "276",
          },
          {
            name: "Grenada",
            alpha3: "GRD",
            countryCode: "308",
          },
          {
            name: "Guinea",
            alpha3: "GIN",
            countryCode: "324",
          },
          {
            name: "Holy See",
            alpha3: "VAT",
            countryCode: "336",
          },
          {
            name: "Albania",
            alpha3: "ALB",
            countryCode: "008",
          },
          {
            name: "India",
            alpha3: "IND",
            countryCode: "356",
          },
          {
            name: "Isle of Man",
            alpha3: "IMN",
            countryCode: "833",
          },
          {
            name: "Antigua and Barbuda",
            alpha3: "ATG",
            countryCode: "028",
          },
          {
            name: "Jersey",
            alpha3: "JEY",
            countryCode: "832",
          },
          {
            name: "Austria",
            alpha3: "AUT",
            countryCode: "040",
          },
          {
            name: "Korea (Democratic People's Republic of)",
            alpha3: "PRK",
            countryCode: "408",
          },
          {
            name: "Barbados",
            alpha3: "BRB",
            countryCode: "052",
          },
          {
            name: "Latvia",
            alpha3: "LVA",
            countryCode: "428",
          },
          {
            name: "Bermuda",
            alpha3: "BMU",
            countryCode: "060",
          },
          {
            name: "Botswana",
            alpha3: "BWA",
            countryCode: "072",
          },
          {
            name: "Liechtenstein",
            alpha3: "LIE",
            countryCode: "438",
          },
          {
            name: "Bulgaria",
            alpha3: "BGR",
            countryCode: "100",
          },
          {
            name: "Malawi",
            alpha3: "MWI",
            countryCode: "454",
          },
          {
            name: "Cameroon",
            alpha3: "CMR",
            countryCode: "120",
          },
          {
            name: "Marshall Islands",
            alpha3: "MHL",
            countryCode: "584",
          },
          {
            name: "Chile",
            alpha3: "CHL",
            countryCode: "152",
          },
          {
            name: "Mexico",
            alpha3: "MEX",
            countryCode: "484",
          },
          {
            name: "Montenegro",
            alpha3: "MNE",
            countryCode: "499",
          },
          {
            name: "Comoros",
            alpha3: "COM",
            countryCode: "174",
          },
          {
            name: "Namibia",
            alpha3: "NAM",
            countryCode: "516",
          },
          {
            name: "Côte d'Ivoire",
            alpha3: "CIV",
            countryCode: "384",
          },
          {
            name: "New Zealand",
            alpha3: "NZL",
            countryCode: "554",
          },
          {
            name: "Norfolk Island",
            alpha3: "NFK",
            countryCode: "574",
          },
          {
            name: "Czechia",
            alpha3: "CZE",
            countryCode: "203",
          },
          {
            name: "Pakistan",
            alpha3: "PAK",
            countryCode: "586",
          },
          {
            name: "Ecuador",
            alpha3: "ECU",
            countryCode: "218",
          },
          {
            name: "Paraguay",
            alpha3: "PRY",
            countryCode: "600",
          },
          {
            name: "Estonia",
            alpha3: "EST",
            countryCode: "233",
          },
          {
            name: "Portugal",
            alpha3: "PRT",
            countryCode: "620",
          },
          {
            name: "Fiji",
            alpha3: "FJI",
            countryCode: "242",
          },
          {
            name: "Russian Federation",
            alpha3: "RUS",
            countryCode: "643",
          },
          {
            name: "French Southern Territories",
            alpha3: "ATF",
            countryCode: "260",
          },
          {
            name: "Saint Lucia",
            alpha3: "LCA",
            countryCode: "662",
          },
          {
            name: "Ghana",
            alpha3: "GHA",
            countryCode: "288",
          },
          {
            name: "San Marino",
            alpha3: "SMR",
            countryCode: "674",
          },
          {
            name: "Guadeloupe",
            alpha3: "GLP",
            countryCode: "312",
          },
          {
            name: "Seychelles",
            alpha3: "SYC",
            countryCode: "690",
          },
          {
            name: "Guinea-Bissau",
            alpha3: "GNB",
            countryCode: "624",
          },
          {
            name: "Slovenia",
            alpha3: "SVN",
            countryCode: "705",
          },
          {
            name: "South Sudan",
            alpha3: "SSD",
            countryCode: "728",
          },
          {
            name: "Honduras",
            alpha3: "HND",
            countryCode: "340",
          },
          {
            name: "Svalbard and Jan Mayen",
            alpha3: "SJM",
            countryCode: "744",
          },
          {
            name: "Indonesia",
            alpha3: "IDN",
            countryCode: "360",
          },
          {
            name: "Tajikistan",
            alpha3: "TJK",
            countryCode: "762",
          },
          {
            name: "Israel",
            alpha3: "ISR",
            countryCode: "376",
          },
          {
            name: "Tokelau",
            alpha3: "TKL",
            countryCode: "772",
          },
          {
            name: "Jordan",
            alpha3: "JOR",
            countryCode: "400",
          },
          {
            name: "Turkmenistan",
            alpha3: "TKM",
            countryCode: "795",
          },
          {
            name: "Korea, Republic of",
            alpha3: "KOR",
            countryCode: "410",
          },
          {
            name: "United Arab Emirates",
            alpha3: "ARE",
            countryCode: "784",
          },
          {
            name: "Lebanon",
            alpha3: "LBN",
            countryCode: "422",
          },
          {
            name: "Lithuania",
            alpha3: "LTU",
            countryCode: "440",
          },
          {
            name: "Uzbekistan",
            alpha3: "UZB",
            countryCode: "860",
          },
          {
            name: "Virgin Islands (U.S.)",
            alpha3: "VIR",
            countryCode: "850",
          },
          {
            name: "Malaysia",
            alpha3: "MYS",
            countryCode: "458",
          },
          {
            name: "Zimbabwe",
            alpha3: "ZWE",
            countryCode: "716",
          },
          {
            name: "Martinique",
            alpha3: "MTQ",
            countryCode: "474",
          },
          {
            name: "Algeria",
            alpha3: "DZA",
            countryCode: "012",
          },
          {
            name: "Micronesia (Federated States of)",
            alpha3: "FSM",
            countryCode: "583",
          },
          {
            name: "Montserrat",
            alpha3: "MSR",
            countryCode: "500",
          },
          {
            name: "Nauru",
            alpha3: "NRU",
            countryCode: "520",
          },
          {
            name: "Andorra",
            alpha3: "AND",
            countryCode: "020",
          },
          {
            name: "Nicaragua",
            alpha3: "NIC",
            countryCode: "558",
          },
          {
            name: "Argentina",
            alpha3: "ARG",
            countryCode: "032",
          },
          {
            name: "North Macedonia",
            alpha3: "MKD",
            countryCode: "807",
          },
          {
            name: "Azerbaijan",
            alpha3: "AZE",
            countryCode: "031",
          },
          {
            name: "Palau",
            alpha3: "PLW",
            countryCode: "585",
          },
          {
            name: "Belarus",
            alpha3: "BLR",
            countryCode: "112",
          },
          {
            name: "Peru",
            alpha3: "PER",
            countryCode: "604",
          },
          {
            name: "Bhutan",
            alpha3: "BTN",
            countryCode: "064",
          },
          {
            name: "Puerto Rico",
            alpha3: "PRI",
            countryCode: "630",
          },
          {
            name: "Bouvet Island",
            alpha3: "BVT",
            countryCode: "074",
          },
          {
            name: "Rwanda",
            alpha3: "RWA",
            countryCode: "646",
          },
          {
            name: "Burkina Faso",
            alpha3: "BFA",
            countryCode: "854",
          },
          {
            name: "Saint Martin (French part)",
            alpha3: "MAF",
            countryCode: "663",
          },
          {
            name: "Canada",
            alpha3: "CAN",
            countryCode: "124",
          },
          {
            name: "Sao Tome and Principe",
            alpha3: "STP",
            countryCode: "678",
          },
          {
            name: "China",
            alpha3: "CHN",
            countryCode: "156",
          },
          {
            name: "Sierra Leone",
            alpha3: "SLE",
            countryCode: "694",
          },
          {
            name: "American Samoa",
            alpha3: "ASM",
            countryCode: "016",
          },
          {
            name: "Solomon Islands",
            alpha3: "SLB",
            countryCode: "090",
          },
          {
            name: "Congo",
            alpha3: "COG",
            countryCode: "178",
          },
          {
            name: "Angola",
            alpha3: "AGO",
            countryCode: "024",
          },
          {
            name: "Croatia",
            alpha3: "HRV",
            countryCode: "191",
          },
          {
            name: "Spain",
            alpha3: "ESP",
            countryCode: "724",
          },
          {
            name: "Denmark",
            alpha3: "DNK",
            countryCode: "208",
          },
          {
            name: "Sweden",
            alpha3: "SWE",
            countryCode: "752",
          },
          {
            name: "Armenia",
            alpha3: "ARM",
            countryCode: "051",
          },
          {
            name: "Egypt",
            alpha3: "EGY",
            countryCode: "818",
          },
          {
            name: "Bahamas",
            alpha3: "BHS",
            countryCode: "044",
          },
          {
            name: "Tanzania, United Republic of",
            alpha3: "TZA",
            countryCode: "834",
          },
          {
            name: "Eswatini",
            alpha3: "SWZ",
            countryCode: "748",
          },
          {
            name: "Belgium",
            alpha3: "BEL",
            countryCode: "056",
          },
          {
            name: "Tonga",
            alpha3: "TON",
            countryCode: "776",
          },
          {
            name: "Finland",
            alpha3: "FIN",
            countryCode: "246",
          },
          {
            name: "Bolivia (Plurinational State of)",
            alpha3: "BOL",
            countryCode: "068",
          },
          {
            name: "Turks and Caicos Islands",
            alpha3: "TCA",
            countryCode: "796",
          },
          {
            name: "Gabon",
            alpha3: "GAB",
            countryCode: "266",
          },
          {
            name: "Brazil",
            alpha3: "BRA",
            countryCode: "076",
          },
          {
            name: "United Kingdom of Great Britain and Northern Ireland",
            alpha3: "GBR",
            countryCode: "826",
          },
          {
            name: "Burundi",
            alpha3: "BDI",
            countryCode: "108",
          },
          {
            name: "Gibraltar",
            alpha3: "GIB",
            countryCode: "292",
          },
          {
            name: "Vanuatu",
            alpha3: "VUT",
            countryCode: "548",
          },
          {
            name: "Cayman Islands",
            alpha3: "CYM",
            countryCode: "136",
          },
          {
            name: "Guam",
            alpha3: "GUM",
            countryCode: "316",
          },
          {
            name: "Wallis and Futuna",
            alpha3: "WLF",
            countryCode: "876",
          },
          {
            name: "Christmas Island",
            alpha3: "CXR",
            countryCode: "162",
          },
          {
            name: "Guyana",
            alpha3: "GUY",
            countryCode: "328",
          },
          {
            name: "Congo, Democratic Republic of the",
            alpha3: "COD",
            countryCode: "180",
          },
          {
            name: "Hong Kong",
            alpha3: "HKG",
            countryCode: "344",
          },
          {
            name: "Cuba",
            alpha3: "CUB",
            countryCode: "192",
          },
          {
            name: "Iran (Islamic Republic of)",
            alpha3: "IRN",
            countryCode: "364",
          },
          {
            name: "Djibouti",
            alpha3: "DJI",
            countryCode: "262",
          },
          {
            name: "Italy",
            alpha3: "ITA",
            countryCode: "380",
          },
          {
            name: "El Salvador",
            alpha3: "SLV",
            countryCode: "222",
          },
          {
            name: "Kazakhstan",
            alpha3: "KAZ",
            countryCode: "398",
          },
          {
            name: "Ethiopia",
            alpha3: "ETH",
            countryCode: "231",
          },
          {
            name: "Kuwait",
            alpha3: "KWT",
            countryCode: "414",
          },
          {
            name: "Lesotho",
            alpha3: "LSO",
            countryCode: "426",
          },
          {
            name: "France",
            alpha3: "FRA",
            countryCode: "250",
          },
          {
            name: "Luxembourg",
            alpha3: "LUX",
            countryCode: "442",
          },
          {
            name: "Gambia",
            alpha3: "GMB",
            countryCode: "270",
          },
          {
            name: "Maldives",
            alpha3: "MDV",
            countryCode: "462",
          },
          {
            name: "Mauritania",
            alpha3: "MRT",
            countryCode: "478",
          },
          {
            name: "Greece",
            alpha3: "GRC",
            countryCode: "300",
          },
          {
            name: "Moldova, Republic of",
            alpha3: "MDA",
            countryCode: "498",
          },
          {
            name: "Guatemala",
            alpha3: "GTM",
            countryCode: "320",
          },
          {
            name: "Morocco",
            alpha3: "MAR",
            countryCode: "504",
          },
          {
            name: "Haiti",
            alpha3: "HTI",
            countryCode: "332",
          },
          {
            name: "Nepal",
            alpha3: "NPL",
            countryCode: "524",
          },
          {
            name: "Hungary",
            alpha3: "HUN",
            countryCode: "348",
          },
          {
            name: "Niger",
            alpha3: "NER",
            countryCode: "562",
          },
          {
            name: "Iraq",
            alpha3: "IRQ",
            countryCode: "368",
          },
          {
            name: "Northern Mariana Islands",
            alpha3: "MNP",
            countryCode: "580",
          },
          {
            name: "Jamaica",
            alpha3: "JAM",
            countryCode: "388",
          },
          {
            name: "Palestine, State of",
            alpha3: "PSE",
            countryCode: "275",
          },
          {
            name: "Kenya",
            alpha3: "KEN",
            countryCode: "404",
          },
          {
            name: "Philippines",
            alpha3: "PHL",
            countryCode: "608",
          },
          {
            name: "Kyrgyzstan",
            alpha3: "KGZ",
            countryCode: "417",
          },
          {
            name: "Liberia",
            alpha3: "LBR",
            countryCode: "430",
          },
          {
            name: "Qatar",
            alpha3: "QAT",
            countryCode: "634",
          },
          {
            name: "Macao",
            alpha3: "MAC",
            countryCode: "446",
          },
          {
            name: "Mali",
            alpha3: "MLI",
            countryCode: "466",
          },
          {
            name: "Saint Barthélemy",
            alpha3: "BLM",
            countryCode: "652",
          },
          {
            name: "Mauritius",
            alpha3: "MUS",
            countryCode: "480",
          },
          {
            name: "Saint Pierre and Miquelon",
            alpha3: "SPM",
            countryCode: "666",
          },
          {
            name: "Monaco",
            alpha3: "MCO",
            countryCode: "492",
          },
          {
            name: "Saudi Arabia",
            alpha3: "SAU",
            countryCode: "682",
          },
          {
            name: "Mozambique",
            alpha3: "MOZ",
            countryCode: "508",
          },
          {
            name: "Singapore",
            alpha3: "SGP",
            countryCode: "702",
          },
          {
            name: "Netherlands",
            alpha3: "NLD",
            countryCode: "528",
          },
          {
            name: "Nigeria",
            alpha3: "NGA",
            countryCode: "566",
          },
          {
            name: "Somalia",
            alpha3: "SOM",
            countryCode: "706",
          },
          {
            name: "Norway",
            alpha3: "NOR",
            countryCode: "578",
          },
          {
            name: "Sri Lanka",
            alpha3: "LKA",
            countryCode: "144",
          },
          {
            name: "Panama",
            alpha3: "PAN",
            countryCode: "591",
          },
          {
            name: "Switzerland",
            alpha3: "CHE",
            countryCode: "756",
          },
          {
            name: "Pitcairn",
            alpha3: "PCN",
            countryCode: "612",
          },
          {
            name: "Thailand",
            alpha3: "THA",
            countryCode: "764",
          },
          {
            name: "Trinidad and Tobago",
            alpha3: "TTO",
            countryCode: "780",
          },
          {
            name: "Réunion",
            alpha3: "REU",
            countryCode: "638",
          },
          {
            name: "Saint Helena, Ascension and Tristan da Cunha",
            alpha3: "SHN",
            countryCode: "654",
          },
          {
            name: "Tuvalu",
            alpha3: "TUV",
            countryCode: "798",
          },
          {
            name: "United States of America",
            alpha3: "USA",
            countryCode: "840",
          },
          {
            name: "Saint Vincent and the Grenadines",
            alpha3: "VCT",
            countryCode: "670",
          },
          {
            name: "Senegal",
            alpha3: "SEN",
            countryCode: "686",
          },
          {
            name: "Venezuela (Bolivarian Republic of)",
            alpha3: "VEN",
            countryCode: "862",
          },
          {
            name: "Sint Maarten (Dutch part)",
            alpha3: "SXM",
            countryCode: "534",
          },
          {
            name: "Western Sahara",
            alpha3: "ESH",
            countryCode: "732",
          },
          {
            name: "South Africa",
            alpha3: "ZAF",
            countryCode: "710",
          },
          {
            name: "Sudan",
            alpha3: "SDN",
            countryCode: "729",
          },
          {
            name: "Syrian Arab Republic",
            alpha3: "SYR",
            countryCode: "760",
          },
          {
            name: "Timor-Leste",
            alpha3: "TLS",
            countryCode: "626",
          },
          {
            name: "Tunisia",
            alpha3: "TUN",
            countryCode: "788",
          },
          {
            name: "Uganda",
            alpha3: "UGA",
            countryCode: "800",
          },
          {
            name: "United States Minor Outlying Islands",
            alpha3: "UMI",
            countryCode: "581",
          },
          {
            name: "Viet Nam",
            alpha3: "VNM",
            countryCode: "704",
          },
          {
            name: "Yemen",
            alpha3: "YEM",
            countryCode: "887",
          },
        ]);

      default:
        break;
    }
  },
};
