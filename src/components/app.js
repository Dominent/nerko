import React from 'react';

import Editor from './Editor';

export default () => {
    var json = `
       [
  {
    "_id": "59a5b8a321a79218b29582f7",
    "index": 0,
    "guid": "c2af4544-fbb2-40c5-9413-35b2f2face94",
    "isActive": true,
    "balance": "$1,931.63",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "blue",
    "name": "Herman Bender",
    "gender": "male",
    "company": "HARMONEY",
    "email": "hermanbender@harmoney.com",
    "phone": "+1 (829) 549-3479",
    "address": "108 Gates Avenue, Ticonderoga, Alabama, 2568",
    "about": "Mollit fugiat velit Lorem consectetur velit adipisicing dolore culpa. Excepteur eiusmod irure proident irure sunt exercitation culpa. Dolore consectetur proident dolore eu minim mollit. Ad adipisicing anim laborum velit aute Lorem incididunt officia mollit exercitation et et aliqua. Elit qui enim duis minim quis officia do. Culpa sint pariatur aute eu ullamco cillum cupidatat quis velit in. Esse aliquip cupidatat mollit minim ullamco duis nostrud qui.\r\n",
    "registered": "2016-06-30T05:13:53 -03:00",
    "latitude": 54.348355,
    "longitude": 107.477635,
    "tags": [
      "velit",
      "laborum",
      "magna",
      "adipisicing",
      "id",
      "fugiat",
      "veniam"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Rhea Perry"
      },
      {
        "id": 1,
        "name": "Mitzi Lamb"
      },
      {
        "id": 2,
        "name": "Larson Booth"
      }
    ],
    "greeting": "Hello, Herman Bender! You have 8 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "59a5b8a3bdc609a6c3d9e3ac",
    "index": 1,
    "guid": "00097d1f-15f0-4ae4-baf8-794cb594b245",
    "isActive": false,
    "balance": "$3,911.94",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "blue",
    "name": "Sheree Church",
    "gender": "female",
    "company": "ASSITIA",
    "email": "shereechurch@assitia.com",
    "phone": "+1 (899) 538-3824",
    "address": "262 Stratford Road, Hebron, Kansas, 1279",
    "about": "Culpa eu veniam pariatur officia est. Do nisi elit anim commodo dolor cillum ipsum cupidatat velit aliquip. Culpa dolore cupidatat dolore sunt culpa excepteur excepteur tempor. Duis cillum incididunt enim veniam excepteur ut mollit irure laboris cillum ad ea qui. Consectetur nisi nulla cupidatat ut aute nostrud in ut.\r\n",
    "registered": "2014-09-05T05:17:13 -03:00",
    "latitude": -24.875132,
    "longitude": -62.800156,
    "tags": [
      "veniam",
      "nulla",
      "exercitation",
      "laboris",
      "in",
      "aliquip",
      "ipsum"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Lillian Lang"
      },
      {
        "id": 1,
        "name": "Britney Stein"
      },
      {
        "id": 2,
        "name": "Lorie Fitzgerald"
      }
    ],
    "greeting": "Hello, Sheree Church! You have 4 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "59a5b8a304e99c7771a3204c",
    "index": 2,
    "guid": "9c2145a3-9f8f-4219-8f73-8c03dd454cc5",
    "isActive": false,
    "balance": "$1,216.46",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "brown",
    "name": "Coleman Hogan",
    "gender": "male",
    "company": "ACCUPRINT",
    "email": "colemanhogan@accuprint.com",
    "phone": "+1 (968) 439-3820",
    "address": "727 Noel Avenue, Calpine, South Dakota, 4966",
    "about": "Dolore commodo minim amet ut minim id proident laborum irure do aliqua ipsum dolor deserunt. Dolore ea elit sit pariatur reprehenderit nostrud proident cupidatat excepteur consequat occaecat commodo tempor consequat. Ea et pariatur ex Lorem enim occaecat proident ullamco magna anim. Eu nostrud eiusmod laborum culpa. Consequat magna mollit dolor non aliquip ad. Exercitation occaecat et adipisicing ea ut Lorem quis velit adipisicing.\r\n",
    "registered": "2015-01-21T12:42:43 -02:00",
    "latitude": 32.178626,
    "longitude": -20.584638,
    "tags": [
      "minim",
      "amet",
      "quis",
      "consequat",
      "culpa",
      "cupidatat",
      "cillum"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Brandie Sherman"
      },
      {
        "id": 1,
        "name": "Valentine Frank"
      },
      {
        "id": 2,
        "name": "Jody Miranda"
      }
    ],
    "greeting": "Hello, Coleman Hogan! You have 4 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "59a5b8a3442b7bbf253b89e7",
    "index": 3,
    "guid": "f97b69c6-5a5e-4bfa-b8d1-ee5dc161a155",
    "isActive": false,
    "balance": "$1,253.42",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "brown",
    "name": "Ines Frost",
    "gender": "female",
    "company": "EVEREST",
    "email": "inesfrost@everest.com",
    "phone": "+1 (884) 549-2648",
    "address": "551 Barlow Drive, Crayne, California, 3230",
    "about": "Do reprehenderit nulla adipisicing adipisicing dolor cupidatat magna non amet laborum eu eiusmod dolor incididunt. Exercitation voluptate et quis sint irure anim esse do officia consequat consectetur officia exercitation. Minim enim deserunt consectetur voluptate minim sit laboris ut duis incididunt duis non aliqua.\r\n",
    "registered": "2015-08-11T01:03:58 -03:00",
    "latitude": 1.863188,
    "longitude": -165.185538,
    "tags": [
      "culpa",
      "fugiat",
      "ipsum",
      "sit",
      "incididunt",
      "cillum",
      "amet"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Noble Burnett"
      },
      {
        "id": 1,
        "name": "Inez Gates"
      },
      {
        "id": 2,
        "name": "Chavez Richardson"
      }
    ],
    "greeting": "Hello, Ines Frost! You have 2 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "59a5b8a3c78ba7d335e40c1e",
    "index": 4,
    "guid": "0a00eb84-3955-42d9-8702-9f0225776577",
    "isActive": true,
    "balance": "$3,955.70",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "green",
    "name": "Gonzales Sampson",
    "gender": "male",
    "company": "PHARMACON",
    "email": "gonzalessampson@pharmacon.com",
    "phone": "+1 (950) 494-2682",
    "address": "562 Vista Place, Delco, Florida, 3038",
    "about": "Consectetur magna velit Lorem reprehenderit minim quis. Ut culpa cillum est nulla. Laborum incididunt enim quis laborum.\r\n",
    "registered": "2017-02-22T08:01:06 -02:00",
    "latitude": 31.249372,
    "longitude": 93.548287,
    "tags": [
      "sint",
      "ipsum",
      "aute",
      "culpa",
      "cupidatat",
      "cillum",
      "occaecat"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Kasey Mcleod"
      },
      {
        "id": 1,
        "name": "Thompson Valentine"
      },
      {
        "id": 2,
        "name": "Carolina Mueller"
      }
    ],
    "greeting": "Hello, Gonzales Sampson! You have 5 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "59a5b8a3ff8f8d126325c9c5",
    "index": 5,
    "guid": "5c7e197e-b082-4a85-ab76-d30ecf71e6c5",
    "isActive": true,
    "balance": "$3,350.01",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "blue",
    "name": "Castillo Freeman",
    "gender": "male",
    "company": "MIXERS",
    "email": "castillofreeman@mixers.com",
    "phone": "+1 (888) 495-3491",
    "address": "390 Belmont Avenue, Leroy, New Hampshire, 2919",
    "about": "Cillum nisi quis exercitation Lorem aliqua irure ex deserunt mollit in aute sint qui. Culpa quis laboris ut elit excepteur quis et exercitation id do esse. Commodo nulla pariatur est magna reprehenderit exercitation sint.\r\n",
    "registered": "2014-10-28T03:10:15 -02:00",
    "latitude": 70.029342,
    "longitude": -85.800935,
    "tags": [
      "consectetur",
      "nulla",
      "ipsum",
      "officia",
      "reprehenderit",
      "ipsum",
      "sunt"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Carmella Carlson"
      },
      {
        "id": 1,
        "name": "Patrice Stanley"
      },
      {
        "id": 2,
        "name": "Maria Mitchell"
      }
    ],
    "greeting": "Hello, Castillo Freeman! You have 5 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "59a5b8a3e6ffba00607ce190",
    "index": 6,
    "guid": "23c4c1c8-0658-486f-8aaf-c6b4bc6001d5",
    "isActive": true,
    "balance": "$3,831.57",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "green",
    "name": "Barr Madden",
    "gender": "male",
    "company": "KEGULAR",
    "email": "barrmadden@kegular.com",
    "phone": "+1 (846) 477-2148",
    "address": "417 Stockholm Street, Highland, North Carolina, 1264",
    "about": "Ut occaecat anim sit laborum occaecat culpa voluptate ex amet dolor excepteur sunt incididunt reprehenderit. Ea aliqua quis ea laborum aute fugiat amet esse commodo et Lorem in eu sit. Sit reprehenderit aliquip sint nostrud esse elit excepteur laborum qui dolor ea. Veniam tempor consequat voluptate ex occaecat cupidatat aliquip laborum et ut sint ut ea.\r\n",
    "registered": "2014-02-19T05:50:18 -02:00",
    "latitude": 39.366784,
    "longitude": -56.902587,
    "tags": [
      "non",
      "et",
      "consectetur",
      "ut",
      "labore",
      "aliqua",
      "incididunt"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Matilda Hines"
      },
      {
        "id": 1,
        "name": "Mcleod Kerr"
      },
      {
        "id": 2,
        "name": "Boyer Skinner"
      }
    ],
    "greeting": "Hello, Barr Madden! You have 7 unread messages.",
    "favoriteFruit": "apple"
  }
]
    `;


    return (
        <div className='app'>
            <Editor>
                {json}
            </Editor>
        </div>
    )
}