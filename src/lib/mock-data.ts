import { FlightOffer } from "@/models/flight-offer-types";

export const priceTrendData = [
  { date: "Jan 20", price: 245 },
  { date: "Jan 21", price: 268 },
  { date: "Jan 22", price: 289 },
  { date: "Jan 23", price: 312 },
  { date: "Jan 24", price: 298 },
  { date: "Jan 25", price: 275 },
  { date: "Jan 26", price: 256 },
  { date: "Jan 27", price: 234 },
  { date: "Jan 28", price: 267 },
  { date: "Jan 29", price: 289 },
  { date: "Jan 30", price: 301 },
  { date: "Jan 31", price: 278 },
  { date: "Feb 1", price: 265 },
  { date: "Feb 2", price: 245 },
];

export const mockFlights: FlightOffer[] = [
  {
    type: "flight-offer",
    id: "1",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 4,
    itineraries: [
      {
        duration: "PT9H40M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "0",
              at: "2026-01-25T06:10:00",
            },
            arrival: {
              iataCode: "ATL",
              terminal: "N",
              at: "2026-01-25T09:13:00",
            },
            carrierCode: "F9",
            number: "4817",
            aircraft: {
              code: "32N",
            },
            operating: {
              carrierCode: "F9",
            },
            duration: "PT3H3M",
            id: "62",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "ATL",
              terminal: "N",
              at: "2026-01-25T10:30:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-25T12:50:00",
            },
            carrierCode: "F9",
            number: "4315",
            aircraft: {
              code: "32Q",
            },
            operating: {
              carrierCode: "F9",
            },
            duration: "PT5H20M",
            id: "63",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "129.15",
      base: "100.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "129.15",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["F9"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "129.15",
          base: "100.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "62",
            cabin: "ECONOMY",
            fareBasis: "G07PXP4",
            brandedFare: "ECO",
            brandedFareLabel: "BASIC",
            class: "G",
            amenities: [
              {
                description: "UPTO100LB 45KG BAGGAGE",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "FIRST CHECKED BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SECOND CHECKED BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CARRY16KG 35LB UPTO46LI 118LCM",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "PRIORITY BOARDING",
                isChargeable: true,
                amenityType: "TRAVEL_SERVICES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BASIC SEAT",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "63",
            cabin: "ECONOMY",
            fareBasis: "G07PXP4",
            brandedFare: "ECO",
            brandedFareLabel: "BASIC",
            class: "G",
            amenities: [
              {
                description: "UPTO100LB 45KG BAGGAGE",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "FIRST CHECKED BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SECOND CHECKED BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CARRY16KG 35LB UPTO46LI 118LCM",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "PRIORITY BOARDING",
                isChargeable: true,
                amenityType: "TRAVEL_SERVICES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BASIC SEAT",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "2",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 3,
    itineraries: [
      {
        duration: "PT11H12M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T07:00:00",
            },
            arrival: {
              iataCode: "SEA",
              at: "2026-01-25T10:19:00",
            },
            carrierCode: "AS",
            number: "21",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H19M",
            id: "15",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SEA",
              at: "2026-01-25T12:40:00",
            },
            arrival: {
              iataCode: "ONT",
              terminal: "2",
              at: "2026-01-25T15:12:00",
            },
            carrierCode: "AS",
            number: "664",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT2H32M",
            id: "16",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "156.03",
      base: "125.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "156.03",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AS"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "156.03",
          base: "125.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "15",
            cabin: "ECONOMY",
            fareBasis: "OH7OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "16",
            cabin: "ECONOMY",
            fareBasis: "OH7OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "3",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 3,
    itineraries: [
      {
        duration: "PT9H37M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T16:00:00",
            },
            arrival: {
              iataCode: "SEA",
              at: "2026-01-25T19:25:00",
            },
            carrierCode: "AS",
            number: "31",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H25M",
            id: "54",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SEA",
              at: "2026-01-25T20:05:00",
            },
            arrival: {
              iataCode: "ONT",
              terminal: "2",
              at: "2026-01-25T22:37:00",
            },
            carrierCode: "AS",
            number: "489",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT2H32M",
            id: "55",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "188.28",
      base: "155.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "188.28",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AS"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "188.28",
          base: "155.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "54",
            cabin: "ECONOMY",
            fareBasis: "QH7OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "55",
            cabin: "ECONOMY",
            fareBasis: "QH7OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "4",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 1,
    itineraries: [
      {
        duration: "PT6H18M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T17:05:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-25T20:23:00",
            },
            carrierCode: "B6",
            number: "2715",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT6H18M",
            id: "23",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "188.46",
      base: "163.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "188.46",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "188.46",
          base: "163.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "23",
            cabin: "ECONOMY",
            fareBasis: "MI7QUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "M",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "5",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 1,
    itineraries: [
      {
        duration: "PT6H18M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T19:31:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-25T22:49:00",
            },
            carrierCode: "B6",
            number: "423",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT6H18M",
            id: "24",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "188.46",
      base: "163.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "188.46",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "188.46",
          base: "163.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "24",
            cabin: "ECONOMY",
            fareBasis: "MI7QUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "M",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "6",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 1,
    itineraries: [
      {
        duration: "PT6H19M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T10:00:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-25T13:19:00",
            },
            carrierCode: "B6",
            number: "323",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT6H19M",
            id: "25",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "188.46",
      base: "163.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "188.46",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "188.46",
          base: "163.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "25",
            cabin: "ECONOMY",
            fareBasis: "MI7QUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "M",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "7",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 1,
    itineraries: [
      {
        duration: "PT6H19M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T14:00:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-25T17:19:00",
            },
            carrierCode: "B6",
            number: "723",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT6H19M",
            id: "26",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "188.46",
      base: "163.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "188.46",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "188.46",
          base: "163.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "26",
            cabin: "ECONOMY",
            fareBasis: "MI7QUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "M",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "8",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 1,
    itineraries: [
      {
        duration: "PT6H20M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T11:00:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-25T14:20:00",
            },
            carrierCode: "B6",
            number: "223",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT6H20M",
            id: "30",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "188.46",
      base: "163.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "188.46",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "188.46",
          base: "163.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "30",
            cabin: "ECONOMY",
            fareBasis: "MI7QUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "M",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "9",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 1,
    itineraries: [
      {
        duration: "PT6H28M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T20:31:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-25T23:59:00",
            },
            carrierCode: "B6",
            number: "1723",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT6H28M",
            id: "42",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "188.46",
      base: "163.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "188.46",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "188.46",
          base: "163.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "42",
            cabin: "ECONOMY",
            fareBasis: "MI7QUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "M",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "10",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 9,
    itineraries: [
      {
        duration: "PT6H32M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T21:30:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-26T01:02:00",
            },
            carrierCode: "B6",
            number: "823",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT6H32M",
            id: "51",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "188.46",
      base: "163.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "188.46",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "188.46",
          base: "163.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "51",
            cabin: "ECONOMY",
            fareBasis: "MI7QUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "M",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "11",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 7,
    itineraries: [
      {
        duration: "PT9H59M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T17:00:00",
            },
            arrival: {
              iataCode: "PDX",
              at: "2026-01-25T20:21:00",
            },
            carrierCode: "AS",
            number: "19",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H21M",
            id: "86",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "PDX",
              at: "2026-01-25T21:30:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "6",
              at: "2026-01-25T23:59:00",
            },
            carrierCode: "AS",
            number: "1389",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT2H29M",
            id: "87",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "196.88",
      base: "163.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "196.88",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AS"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "196.88",
          base: "163.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "86",
            cabin: "ECONOMY",
            fareBasis: "QH7OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "87",
            cabin: "ECONOMY",
            fareBasis: "QH7OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "12",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 7,
    itineraries: [
      {
        duration: "PT9H59M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T17:00:00",
            },
            arrival: {
              iataCode: "PDX",
              at: "2026-01-25T20:21:00",
            },
            carrierCode: "HA",
            number: "4987",
            aircraft: {
              code: "737",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H21M",
            id: "88",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "PDX",
              at: "2026-01-25T21:30:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "6",
              at: "2026-01-25T23:59:00",
            },
            carrierCode: "HA",
            number: "6448",
            aircraft: {
              code: "737",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT2H29M",
            id: "89",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "196.88",
      base: "163.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "196.88",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["HA"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "196.88",
          base: "163.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "88",
            cabin: "ECONOMY",
            fareBasis: "LH7OAJBN",
            brandedFare: "MB",
            brandedFareLabel: "MAIN CABIN BASIC",
            class: "U",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "UPTO50LB 23KG AND62LI 158LCM",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "89",
            cabin: "ECONOMY",
            fareBasis: "LH7OAJBN",
            brandedFare: "MB",
            brandedFareLabel: "MAIN CABIN BASIC",
            class: "U",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "UPTO50LB 23KG AND62LI 158LCM",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "13",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 7,
    itineraries: [
      {
        duration: "PT10H39M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T16:00:00",
            },
            arrival: {
              iataCode: "SEA",
              at: "2026-01-25T19:25:00",
            },
            carrierCode: "HA",
            number: "4926",
            aircraft: {
              code: "737",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H25M",
            id: "56",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SEA",
              at: "2026-01-25T21:00:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "6",
              at: "2026-01-25T23:39:00",
            },
            carrierCode: "HA",
            number: "6804",
            aircraft: {
              code: "737",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT2H39M",
            id: "57",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "196.88",
      base: "163.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "196.88",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["HA"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "196.88",
          base: "163.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "56",
            cabin: "ECONOMY",
            fareBasis: "LH7OAJBN",
            brandedFare: "MB",
            brandedFareLabel: "MAIN CABIN BASIC",
            class: "U",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "UPTO50LB 23KG AND62LI 158LCM",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "57",
            cabin: "ECONOMY",
            fareBasis: "LH7OAJBN",
            brandedFare: "MB",
            brandedFareLabel: "MAIN CABIN BASIC",
            class: "U",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "UPTO50LB 23KG AND62LI 158LCM",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "14",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 3,
    itineraries: [
      {
        duration: "PT10H27M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T11:30:00",
            },
            arrival: {
              iataCode: "SFO",
              terminal: "1",
              at: "2026-01-25T15:10:00",
            },
            carrierCode: "AS",
            number: "227",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H40M",
            id: "38",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SFO",
              terminal: "1",
              at: "2026-01-25T17:15:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "6",
              at: "2026-01-25T18:57:00",
            },
            carrierCode: "AS",
            number: "3249",
            aircraft: {
              code: "E75",
            },
            operating: {
              carrierName: "SKYWEST AIRLINES AS ALASKASKYWEST",
            },
            duration: "PT1H42M",
            id: "39",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "196.88",
      base: "163.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "196.88",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AS"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "196.88",
          base: "163.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "38",
            cabin: "ECONOMY",
            fareBasis: "QH7OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "39",
            cabin: "ECONOMY",
            fareBasis: "QH7OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "15",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 3,
    itineraries: [
      {
        duration: "PT10H39M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T16:00:00",
            },
            arrival: {
              iataCode: "SEA",
              at: "2026-01-25T19:25:00",
            },
            carrierCode: "AS",
            number: "31",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H25M",
            id: "58",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SEA",
              at: "2026-01-25T21:00:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "6",
              at: "2026-01-25T23:39:00",
            },
            carrierCode: "AS",
            number: "1390",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT2H39M",
            id: "59",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "196.88",
      base: "163.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "196.88",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AS"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "196.88",
          base: "163.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "58",
            cabin: "ECONOMY",
            fareBasis: "QH7OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "59",
            cabin: "ECONOMY",
            fareBasis: "QH7OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "16",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 3,
    itineraries: [
      {
        duration: "PT10H40M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T07:00:00",
            },
            arrival: {
              iataCode: "SEA",
              at: "2026-01-25T10:19:00",
            },
            carrierCode: "AS",
            number: "21",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H19M",
            id: "64",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SEA",
              at: "2026-01-25T11:55:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "6",
              at: "2026-01-25T14:40:00",
            },
            carrierCode: "AS",
            number: "696",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT2H45M",
            id: "65",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "196.88",
      base: "163.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "196.88",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AS"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "196.88",
          base: "163.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "64",
            cabin: "ECONOMY",
            fareBasis: "QH7OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "65",
            cabin: "ECONOMY",
            fareBasis: "QH7OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "17",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 3,
    itineraries: [
      {
        duration: "PT11H32M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T07:00:00",
            },
            arrival: {
              iataCode: "SEA",
              at: "2026-01-25T10:19:00",
            },
            carrierCode: "AS",
            number: "21",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H19M",
            id: "52",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SEA",
              at: "2026-01-25T12:50:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "6",
              at: "2026-01-25T15:32:00",
            },
            carrierCode: "AS",
            number: "1333",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT2H42M",
            id: "53",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "196.88",
      base: "163.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "196.88",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AS"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "196.88",
          base: "163.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "52",
            cabin: "ECONOMY",
            fareBasis: "QH7OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "53",
            cabin: "ECONOMY",
            fareBasis: "QH7OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "18",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 3,
    itineraries: [
      {
        duration: "PT9H46M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T11:30:00",
            },
            arrival: {
              iataCode: "SEA",
              at: "2026-01-25T14:49:00",
            },
            carrierCode: "AS",
            number: "23",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H19M",
            id: "70",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SEA",
              at: "2026-01-25T15:35:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "6",
              at: "2026-01-25T18:16:00",
            },
            carrierCode: "AS",
            number: "1411",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT2H41M",
            id: "71",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "238.80",
      base: "202.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "238.80",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AS"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "238.80",
          base: "202.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "70",
            cabin: "ECONOMY",
            fareBasis: "NH7OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "71",
            cabin: "ECONOMY",
            fareBasis: "NH7OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "19",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 3,
    itineraries: [
      {
        duration: "PT11H55M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T11:30:00",
            },
            arrival: {
              iataCode: "SEA",
              at: "2026-01-25T14:49:00",
            },
            carrierCode: "AS",
            number: "23",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H19M",
            id: "80",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SEA",
              at: "2026-01-25T17:40:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "6",
              at: "2026-01-25T20:25:00",
            },
            carrierCode: "AS",
            number: "524",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT2H45M",
            id: "81",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "238.80",
      base: "202.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "238.80",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AS"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "238.80",
          base: "202.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "80",
            cabin: "ECONOMY",
            fareBasis: "NH7OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "81",
            cabin: "ECONOMY",
            fareBasis: "NH7OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "20",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 7,
    itineraries: [
      {
        duration: "PT9H46M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T11:30:00",
            },
            arrival: {
              iataCode: "SEA",
              at: "2026-01-25T14:49:00",
            },
            carrierCode: "HA",
            number: "4925",
            aircraft: {
              code: "737",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H19M",
            id: "72",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SEA",
              at: "2026-01-25T15:35:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "6",
              at: "2026-01-25T18:16:00",
            },
            carrierCode: "HA",
            number: "6805",
            aircraft: {
              code: "737",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT2H41M",
            id: "73",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "238.80",
      base: "202.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "238.80",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["HA"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "238.80",
          base: "202.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "72",
            cabin: "ECONOMY",
            fareBasis: "KH7OAJBN",
            brandedFare: "MB",
            brandedFareLabel: "MAIN CABIN BASIC",
            class: "U",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "UPTO50LB 23KG AND62LI 158LCM",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "73",
            cabin: "ECONOMY",
            fareBasis: "KH7OAJBN",
            brandedFare: "MB",
            brandedFareLabel: "MAIN CABIN BASIC",
            class: "U",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "UPTO50LB 23KG AND62LI 158LCM",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "21",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 7,
    itineraries: [
      {
        duration: "PT11H55M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T11:30:00",
            },
            arrival: {
              iataCode: "SEA",
              at: "2026-01-25T14:49:00",
            },
            carrierCode: "HA",
            number: "4925",
            aircraft: {
              code: "737",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H19M",
            id: "82",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SEA",
              at: "2026-01-25T17:40:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "6",
              at: "2026-01-25T20:25:00",
            },
            carrierCode: "HA",
            number: "6800",
            aircraft: {
              code: "737",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT2H45M",
            id: "83",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "238.80",
      base: "202.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "238.80",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["HA"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "238.80",
          base: "202.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "82",
            cabin: "ECONOMY",
            fareBasis: "KH7OAJBN",
            brandedFare: "MB",
            brandedFareLabel: "MAIN CABIN BASIC",
            class: "U",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "UPTO50LB 23KG AND62LI 158LCM",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "83",
            cabin: "ECONOMY",
            fareBasis: "KH7OAJBN",
            brandedFare: "MB",
            brandedFareLabel: "MAIN CABIN BASIC",
            class: "U",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "UPTO50LB 23KG AND62LI 158LCM",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "22",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 1,
    itineraries: [
      {
        duration: "PT10H14M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T08:15:00",
            },
            arrival: {
              iataCode: "FLL",
              terminal: "3",
              at: "2026-01-25T11:25:00",
            },
            carrierCode: "B6",
            number: "2201",
            aircraft: {
              code: "320",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT3H10M",
            id: "17",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "FLL",
              terminal: "3",
              at: "2026-01-25T12:30:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-25T15:29:00",
            },
            carrierCode: "B6",
            number: "701",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT5H59M",
            id: "18",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "250.63",
      base: "213.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "250.63",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "250.63",
          base: "213.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "17",
            cabin: "ECONOMY",
            fareBasis: "OI7QUEL1",
            brandedFare: "DN",
            brandedFareLabel: "BLUE BASIC",
            class: "L",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "18",
            cabin: "ECONOMY",
            fareBasis: "MI7AUEL1",
            brandedFare: "DN",
            brandedFareLabel: "BLUE BASIC",
            class: "L",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "23",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 1,
    itineraries: [
      {
        duration: "PT11H55M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T14:05:00",
            },
            arrival: {
              iataCode: "FLL",
              terminal: "3",
              at: "2026-01-25T17:21:00",
            },
            carrierCode: "B6",
            number: "1801",
            aircraft: {
              code: "321",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT3H16M",
            id: "84",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "FLL",
              terminal: "3",
              at: "2026-01-25T20:00:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-25T23:00:00",
            },
            carrierCode: "B6",
            number: "2501",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT6H",
            id: "85",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "250.63",
      base: "213.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "250.63",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "250.63",
          base: "213.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "84",
            cabin: "ECONOMY",
            fareBasis: "OI7QUEL1",
            brandedFare: "DN",
            brandedFareLabel: "BLUE BASIC",
            class: "L",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "85",
            cabin: "ECONOMY",
            fareBasis: "MI7AUEL1",
            brandedFare: "DN",
            brandedFareLabel: "BLUE BASIC",
            class: "L",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "24",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 1,
    itineraries: [
      {
        duration: "PT12H16M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T11:30:00",
            },
            arrival: {
              iataCode: "FLL",
              terminal: "3",
              at: "2026-01-25T14:36:00",
            },
            carrierCode: "B6",
            number: "1201",
            aircraft: {
              code: "320",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT3H6M",
            id: "19",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "FLL",
              terminal: "3",
              at: "2026-01-25T17:50:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-25T20:46:00",
            },
            carrierCode: "B6",
            number: "101",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT5H56M",
            id: "20",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "250.63",
      base: "213.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "250.63",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "250.63",
          base: "213.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "19",
            cabin: "ECONOMY",
            fareBasis: "OI7QUEL1",
            brandedFare: "DN",
            brandedFareLabel: "BLUE BASIC",
            class: "L",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "20",
            cabin: "ECONOMY",
            fareBasis: "MI7AUEL1",
            brandedFare: "DN",
            brandedFareLabel: "BLUE BASIC",
            class: "L",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "25",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 3,
    itineraries: [
      {
        duration: "PT9H47M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T11:30:00",
            },
            arrival: {
              iataCode: "SEA",
              at: "2026-01-25T14:49:00",
            },
            carrierCode: "AS",
            number: "23",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H19M",
            id: "74",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SEA",
              at: "2026-01-25T15:45:00",
            },
            arrival: {
              iataCode: "ONT",
              terminal: "2",
              at: "2026-01-25T18:17:00",
            },
            carrierCode: "AS",
            number: "592",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT2H32M",
            id: "75",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "253.85",
      base: "216.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "253.85",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AS"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "253.85",
          base: "216.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "74",
            cabin: "ECONOMY",
            fareBasis: "NH0OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "75",
            cabin: "ECONOMY",
            fareBasis: "NH0OAJBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "26",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 1,
    itineraries: [
      {
        duration: "PT14H30M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T11:30:00",
            },
            arrival: {
              iataCode: "FLL",
              terminal: "3",
              at: "2026-01-25T14:36:00",
            },
            carrierCode: "B6",
            number: "1201",
            aircraft: {
              code: "320",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT3H6M",
            id: "47",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "FLL",
              terminal: "3",
              at: "2026-01-25T20:00:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-25T23:00:00",
            },
            carrierCode: "B6",
            number: "2501",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT6H",
            id: "48",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "255.44",
      base: "213.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "255.44",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "255.44",
          base: "213.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "47",
            cabin: "ECONOMY",
            fareBasis: "OI7QUEL1",
            brandedFare: "DN",
            brandedFareLabel: "BLUE BASIC",
            class: "L",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "48",
            cabin: "ECONOMY",
            fareBasis: "MI7AUEL1",
            brandedFare: "DN",
            brandedFareLabel: "BLUE BASIC",
            class: "L",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "27",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 1,
    itineraries: [
      {
        duration: "PT15H31M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T08:15:00",
            },
            arrival: {
              iataCode: "FLL",
              terminal: "3",
              at: "2026-01-25T11:25:00",
            },
            carrierCode: "B6",
            number: "2201",
            aircraft: {
              code: "320",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT3H10M",
            id: "49",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "FLL",
              terminal: "3",
              at: "2026-01-25T17:50:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-25T20:46:00",
            },
            carrierCode: "B6",
            number: "101",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT5H56M",
            id: "50",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "255.44",
      base: "213.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "255.44",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "255.44",
          base: "213.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "49",
            cabin: "ECONOMY",
            fareBasis: "OI7QUEL1",
            brandedFare: "DN",
            brandedFareLabel: "BLUE BASIC",
            class: "L",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "50",
            cabin: "ECONOMY",
            fareBasis: "MI7AUEL1",
            brandedFare: "DN",
            brandedFareLabel: "BLUE BASIC",
            class: "L",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "28",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 7,
    itineraries: [
      {
        duration: "PT10H27M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T11:30:00",
            },
            arrival: {
              iataCode: "SFO",
              terminal: "1",
              at: "2026-01-25T15:10:00",
            },
            carrierCode: "HA",
            number: "4845",
            aircraft: {
              code: "737",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H40M",
            id: "40",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SFO",
              terminal: "1",
              at: "2026-01-25T17:15:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "6",
              at: "2026-01-25T18:57:00",
            },
            carrierCode: "HA",
            number: "6923",
            aircraft: {
              code: "E75",
            },
            operating: {
              carrierName: "SKYWEST AIRLINES AS ALASKASKYWEST",
            },
            duration: "PT1H42M",
            id: "41",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "268.90",
      base: "230.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "268.90",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["HA"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "268.90",
          base: "230.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "40",
            cabin: "ECONOMY",
            fareBasis: "GH7OAJBN",
            brandedFare: "MB",
            brandedFareLabel: "MAIN CABIN BASIC",
            class: "U",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "UPTO50LB 23KG AND62LI 158LCM",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "41",
            cabin: "ECONOMY",
            fareBasis: "GH7OAJBN",
            brandedFare: "MB",
            brandedFareLabel: "MAIN CABIN BASIC",
            class: "U",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "UPTO50LB 23KG AND62LI 158LCM",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "29",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 3,
    itineraries: [
      {
        duration: "PT13H5M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T11:30:00",
            },
            arrival: {
              iataCode: "SFO",
              terminal: "1",
              at: "2026-01-25T15:10:00",
            },
            carrierCode: "AS",
            number: "227",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H40M",
            id: "5",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SFO",
              terminal: "1",
              at: "2026-01-25T19:55:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "6",
              at: "2026-01-25T21:35:00",
            },
            carrierCode: "AS",
            number: "3353",
            aircraft: {
              code: "E75",
            },
            operating: {
              carrierName: "SKYWEST AIRLINES AS ALASKASKYWEST",
            },
            duration: "PT1H40M",
            id: "6",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "290.91",
      base: "246.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "290.91",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AS"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "290.91",
          base: "246.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "5",
            cabin: "ECONOMY",
            fareBasis: "NH7OAVBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "6",
            cabin: "ECONOMY",
            fareBasis: "NH7OAVBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "30",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 3,
    itineraries: [
      {
        duration: "PT16H10M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T18:30:00",
            },
            arrival: {
              iataCode: "SFO",
              terminal: "1",
              at: "2026-01-25T21:58:00",
            },
            carrierCode: "AS",
            number: "114",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H28M",
            id: "11",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SFO",
              terminal: "1",
              at: "2026-01-26T06:00:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "6",
              at: "2026-01-26T07:40:00",
            },
            carrierCode: "AS",
            number: "3318",
            aircraft: {
              code: "E75",
            },
            operating: {
              carrierName: "SKYWEST AIRLINES AS ALASKASKYWEST",
            },
            duration: "PT1H40M",
            id: "12",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "290.91",
      base: "246.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "290.91",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AS"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "290.91",
          base: "246.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "11",
            cabin: "ECONOMY",
            fareBasis: "NH7OAVBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "12",
            cabin: "ECONOMY",
            fareBasis: "NH7OAVBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "31",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 3,
    itineraries: [
      {
        duration: "PT18H20M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T18:30:00",
            },
            arrival: {
              iataCode: "SFO",
              terminal: "1",
              at: "2026-01-25T21:58:00",
            },
            carrierCode: "AS",
            number: "114",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H28M",
            id: "31",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SFO",
              terminal: "1",
              at: "2026-01-26T08:10:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "6",
              at: "2026-01-26T09:50:00",
            },
            carrierCode: "AS",
            number: "3250",
            aircraft: {
              code: "E75",
            },
            operating: {
              carrierName: "SKYWEST AIRLINES AS ALASKASKYWEST",
            },
            duration: "PT1H40M",
            id: "32",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "290.91",
      base: "246.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "290.91",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AS"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "290.91",
          base: "246.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "31",
            cabin: "ECONOMY",
            fareBasis: "NH7OAVBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "32",
            cabin: "ECONOMY",
            fareBasis: "NH7OAVBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "32",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 7,
    itineraries: [
      {
        duration: "PT13H5M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T11:30:00",
            },
            arrival: {
              iataCode: "SFO",
              terminal: "1",
              at: "2026-01-25T15:10:00",
            },
            carrierCode: "HA",
            number: "4845",
            aircraft: {
              code: "737",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H40M",
            id: "7",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SFO",
              terminal: "1",
              at: "2026-01-25T19:55:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "6",
              at: "2026-01-25T21:35:00",
            },
            carrierCode: "HA",
            number: "6996",
            aircraft: {
              code: "E75",
            },
            operating: {
              carrierName: "SKYWEST AIRLINES AS ALASKASKYWEST",
            },
            duration: "PT1H40M",
            id: "8",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "300.59",
      base: "255.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "300.59",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["HA"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "300.59",
          base: "255.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "7",
            cabin: "ECONOMY",
            fareBasis: "KH7OAVBN",
            brandedFare: "MB",
            brandedFareLabel: "MAIN CABIN BASIC",
            class: "U",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "UPTO50LB 23KG AND62LI 158LCM",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "8",
            cabin: "ECONOMY",
            fareBasis: "GH7OAVBN",
            brandedFare: "MB",
            brandedFareLabel: "MAIN CABIN BASIC",
            class: "U",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "UPTO50LB 23KG AND62LI 158LCM",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "33",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-25",
    lastTicketingDateTime: "2026-01-25",
    numberOfBookableSeats: 9,
    itineraries: [
      {
        duration: "PT6H30M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              at: "2026-01-25T19:00:00",
            },
            arrival: {
              iataCode: "LAX",
              at: "2026-01-25T22:30:00",
            },
            carrierCode: "6X",
            number: "9810",
            aircraft: {
              code: "777",
            },
            operating: {
              carrierCode: "6X",
            },
            duration: "PT6H30M",
            id: "45",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "383.03",
      base: "344.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "383.03",
      additionalServices: [
        {
          amount: "2.00",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: true,
    },
    validatingAirlineCodes: ["6X"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "383.03",
          base: "344.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "45",
            cabin: "ECONOMY",
            fareBasis: "YBARRIER",
            class: "Y",
            includedCheckedBags: {
              quantity: 1,
            },
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "34",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-25",
    lastTicketingDateTime: "2026-01-25",
    numberOfBookableSeats: 9,
    itineraries: [
      {
        duration: "PT6H30M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              at: "2026-01-25T20:00:00",
            },
            arrival: {
              iataCode: "LAX",
              at: "2026-01-25T23:30:00",
            },
            carrierCode: "6X",
            number: "9482",
            aircraft: {
              code: "744",
            },
            operating: {
              carrierCode: "6X",
            },
            duration: "PT6H30M",
            id: "46",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "383.03",
      base: "344.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "383.03",
      additionalServices: [
        {
          amount: "1.00",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: true,
    },
    validatingAirlineCodes: ["6X"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "383.03",
          base: "344.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "46",
            cabin: "ECONOMY",
            fareBasis: "YBARRIER",
            class: "Y",
            includedCheckedBags: {
              quantity: 1,
            },
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "35",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-25",
    lastTicketingDateTime: "2026-01-25",
    numberOfBookableSeats: 9,
    itineraries: [
      {
        duration: "PT9H55M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              at: "2026-01-25T14:55:00",
            },
            arrival: {
              iataCode: "SFO",
              at: "2026-01-25T18:00:00",
            },
            carrierCode: "6X",
            number: "1315",
            aircraft: {
              code: "744",
            },
            operating: {
              carrierCode: "6X",
            },
            duration: "PT6H5M",
            id: "78",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SFO",
              at: "2026-01-25T20:30:00",
            },
            arrival: {
              iataCode: "LAX",
              at: "2026-01-25T21:50:00",
            },
            carrierCode: "6X",
            number: "3667",
            aircraft: {
              code: "767",
            },
            operating: {
              carrierCode: "6X",
            },
            duration: "PT1H20M",
            id: "79",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "412.92",
      base: "344.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "412.92",
      additionalServices: [
        {
          amount: "2.00",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: true,
    },
    validatingAirlineCodes: ["6X"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "412.92",
          base: "344.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "78",
            cabin: "ECONOMY",
            fareBasis: "YBARRIER",
            class: "Y",
            includedCheckedBags: {
              quantity: 1,
            },
          },
          {
            segmentId: "79",
            cabin: "ECONOMY",
            fareBasis: "YBARRIER",
            class: "Y",
            includedCheckedBags: {
              quantity: 1,
            },
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "36",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 3,
    itineraries: [
      {
        duration: "PT14H7M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T11:30:00",
            },
            arrival: {
              iataCode: "SEA",
              at: "2026-01-25T14:49:00",
            },
            carrierCode: "AS",
            number: "23",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H19M",
            id: "9",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SEA",
              at: "2026-01-25T20:05:00",
            },
            arrival: {
              iataCode: "ONT",
              terminal: "2",
              at: "2026-01-25T22:37:00",
            },
            carrierCode: "AS",
            number: "489",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT2H32M",
            id: "10",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "448.94",
      base: "393.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "448.94",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AS"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "448.94",
          base: "393.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "9",
            cabin: "ECONOMY",
            fareBasis: "VH7OAVBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "10",
            cabin: "ECONOMY",
            fareBasis: "SH7YAUBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "37",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 3,
    itineraries: [
      {
        duration: "PT21H39M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T16:00:00",
            },
            arrival: {
              iataCode: "SEA",
              at: "2026-01-25T19:25:00",
            },
            carrierCode: "AS",
            number: "31",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H25M",
            id: "60",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SEA",
              at: "2026-01-26T08:05:00",
            },
            arrival: {
              iataCode: "ONT",
              terminal: "2",
              at: "2026-01-26T10:39:00",
            },
            carrierCode: "AS",
            number: "1364",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT2H34M",
            id: "61",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "448.94",
      base: "393.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "448.94",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AS"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "448.94",
          base: "393.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "60",
            cabin: "ECONOMY",
            fareBasis: "VH7OAVBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "61",
            cabin: "ECONOMY",
            fareBasis: "SH7YAUBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "38",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 3,
    itineraries: [
      {
        duration: "PT14H17M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T07:00:00",
            },
            arrival: {
              iataCode: "SEA",
              at: "2026-01-25T10:19:00",
            },
            carrierCode: "AS",
            number: "21",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H19M",
            id: "21",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SEA",
              at: "2026-01-25T15:45:00",
            },
            arrival: {
              iataCode: "ONT",
              terminal: "2",
              at: "2026-01-25T18:17:00",
            },
            carrierCode: "AS",
            number: "592",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT2H32M",
            id: "22",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "448.94",
      base: "393.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "448.94",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AS"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "448.94",
          base: "393.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "21",
            cabin: "ECONOMY",
            fareBasis: "VH7OAVBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "22",
            cabin: "ECONOMY",
            fareBasis: "SH7YAUBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "39",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 3,
    itineraries: [
      {
        duration: "PT18H25M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T17:00:00",
            },
            arrival: {
              iataCode: "PDX",
              at: "2026-01-25T20:21:00",
            },
            carrierCode: "AS",
            number: "19",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H21M",
            id: "34",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "PDX",
              at: "2026-01-26T06:00:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "6",
              at: "2026-01-26T08:25:00",
            },
            carrierCode: "AS",
            number: "722",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT2H25M",
            id: "35",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "500.54",
      base: "441.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "500.54",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AS"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "500.54",
          base: "441.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "34",
            cabin: "ECONOMY",
            fareBasis: "VH7OCVBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "35",
            cabin: "ECONOMY",
            fareBasis: "LH7OAVBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "40",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-16",
    lastTicketingDateTime: "2026-01-16",
    numberOfBookableSeats: 3,
    itineraries: [
      {
        duration: "PT19H44M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "8",
              at: "2026-01-25T16:00:00",
            },
            arrival: {
              iataCode: "SEA",
              at: "2026-01-25T19:25:00",
            },
            carrierCode: "AS",
            number: "31",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT6H25M",
            id: "68",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "SEA",
              at: "2026-01-26T06:00:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "6",
              at: "2026-01-26T08:44:00",
            },
            carrierCode: "AS",
            number: "1316",
            aircraft: {
              code: "73J",
            },
            operating: {
              carrierCode: "AS",
            },
            duration: "PT2H44M",
            id: "69",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "516.66",
      base: "456.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "516.66",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["AS"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "516.66",
          base: "456.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "68",
            cabin: "ECONOMY",
            fareBasis: "VH7OAVBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "69",
            cabin: "ECONOMY",
            fareBasis: "LH7OAVBN",
            brandedFare: "SV",
            brandedFareLabel: "SAVER",
            class: "X",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "STANDARD MAX 50LB 62LI",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "MEAL 1",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "110V AC POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "USB POWER",
                isChargeable: false,
                amenityType: "ENTERTAINMENT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "41",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 1,
    itineraries: [
      {
        duration: "PT9H55M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T06:30:00",
            },
            arrival: {
              iataCode: "BOS",
              terminal: "C",
              at: "2026-01-25T07:41:00",
            },
            carrierCode: "B6",
            number: "118",
            aircraft: {
              code: "223",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT1H11M",
            id: "76",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "BOS",
              terminal: "C",
              at: "2026-01-25T09:55:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-25T13:25:00",
            },
            carrierCode: "B6",
            number: "387",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT6H30M",
            id: "77",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "590.33",
      base: "529.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "590.33",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "590.33",
          base: "529.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "76",
            cabin: "ECONOMY",
            fareBasis: "EI0JUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "E",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "77",
            cabin: "ECONOMY",
            fareBasis: "UI7ABEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "U",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "42",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 1,
    itineraries: [
      {
        duration: "PT10H29M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T16:30:00",
            },
            arrival: {
              iataCode: "BOS",
              terminal: "C",
              at: "2026-01-25T17:50:00",
            },
            carrierCode: "B6",
            number: "618",
            aircraft: {
              code: "223",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT1H20M",
            id: "43",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "BOS",
              terminal: "C",
              at: "2026-01-25T20:20:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-25T23:59:00",
            },
            carrierCode: "B6",
            number: "187",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT6H39M",
            id: "44",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "590.33",
      base: "529.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "590.33",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "590.33",
          base: "529.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "43",
            cabin: "ECONOMY",
            fareBasis: "EI0JUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "E",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "44",
            cabin: "ECONOMY",
            fareBasis: "UI7ABEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "U",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "43",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 1,
    itineraries: [
      {
        duration: "PT17H26M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T22:59:00",
            },
            arrival: {
              iataCode: "BOS",
              terminal: "C",
              at: "2026-01-26T00:16:00",
            },
            carrierCode: "B6",
            number: "1118",
            aircraft: {
              code: "223",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT1H17M",
            id: "36",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "BOS",
              terminal: "C",
              at: "2026-01-26T09:55:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-26T13:25:00",
            },
            carrierCode: "B6",
            number: "387",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT6H30M",
            id: "37",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "595.14",
      base: "529.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "595.14",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "595.14",
          base: "529.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "36",
            cabin: "ECONOMY",
            fareBasis: "EI0JUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "E",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "37",
            cabin: "ECONOMY",
            fareBasis: "UI7ABEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "U",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "44",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 7,
    itineraries: [
      {
        duration: "PT6H20M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T06:00:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-25T09:20:00",
            },
            carrierCode: "B6",
            number: "123",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT6H20M",
            id: "29",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "613.08",
      base: "558.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "613.08",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "613.08",
          base: "558.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "29",
            cabin: "ECONOMY",
            fareBasis: "EI0JUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "E",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "45",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 7,
    itineraries: [
      {
        duration: "PT6H22M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T08:00:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-25T11:22:00",
            },
            carrierCode: "B6",
            number: "2223",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT6H22M",
            id: "33",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "613.08",
      base: "558.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "613.08",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "613.08",
          base: "558.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "33",
            cabin: "ECONOMY",
            fareBasis: "EI0JUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "E",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "46",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 1,
    itineraries: [
      {
        duration: "PT10H",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T06:00:00",
            },
            arrival: {
              iataCode: "FLL",
              terminal: "3",
              at: "2026-01-25T08:59:00",
            },
            carrierCode: "B6",
            number: "1",
            aircraft: {
              code: "321",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT2H59M",
            id: "1",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "FLL",
              terminal: "3",
              at: "2026-01-25T10:05:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-25T13:00:00",
            },
            carrierCode: "B6",
            number: "201",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT5H55M",
            id: "2",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "739.75",
      base: "668.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "739.75",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "739.75",
          base: "668.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "1",
            cabin: "ECONOMY",
            fareBasis: "EI0JUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "E",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "2",
            cabin: "ECONOMY",
            fareBasis: "MI7AUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "M",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "47",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 1,
    itineraries: [
      {
        duration: "PT11H19M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T07:10:00",
            },
            arrival: {
              iataCode: "FLL",
              terminal: "3",
              at: "2026-01-25T10:12:00",
            },
            carrierCode: "B6",
            number: "601",
            aircraft: {
              code: "321",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT3H2M",
            id: "27",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "FLL",
              terminal: "3",
              at: "2026-01-25T12:30:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-25T15:29:00",
            },
            carrierCode: "B6",
            number: "701",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT5H59M",
            id: "28",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "739.75",
      base: "668.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "739.75",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "739.75",
          base: "668.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "27",
            cabin: "ECONOMY",
            fareBasis: "EI0JUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "E",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "28",
            cabin: "ECONOMY",
            fareBasis: "MI7AUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "M",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "48",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 7,
    itineraries: [
      {
        duration: "PT13H41M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T22:59:00",
            },
            arrival: {
              iataCode: "BOS",
              terminal: "C",
              at: "2026-01-26T00:16:00",
            },
            carrierCode: "B6",
            number: "1118",
            aircraft: {
              code: "223",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT1H17M",
            id: "66",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "BOS",
              terminal: "C",
              at: "2026-01-26T06:05:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-26T09:40:00",
            },
            carrierCode: "B6",
            number: "287",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT6H35M",
            id: "67",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "1067.06",
      base: "968.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "1067.06",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "1067.06",
          base: "968.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "66",
            cabin: "ECONOMY",
            fareBasis: "EI0JUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "E",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "67",
            cabin: "ECONOMY",
            fareBasis: "EI0KUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "E",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "49",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 7,
    itineraries: [
      {
        duration: "PT18H10M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T18:30:00",
            },
            arrival: {
              iataCode: "BOS",
              terminal: "C",
              at: "2026-01-25T19:55:00",
            },
            carrierCode: "B6",
            number: "918",
            aircraft: {
              code: "223",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT1H25M",
            id: "13",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "BOS",
              terminal: "C",
              at: "2026-01-26T06:05:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "1",
              at: "2026-01-26T09:40:00",
            },
            carrierCode: "B6",
            number: "287",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT6H35M",
            id: "14",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "1067.06",
      base: "968.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "1067.06",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["B6"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "1067.06",
          base: "968.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "13",
            cabin: "ECONOMY",
            fareBasis: "EI0JUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "E",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "14",
            cabin: "ECONOMY",
            fareBasis: "EI0KUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "E",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "50",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2026-01-17",
    lastTicketingDateTime: "2026-01-17",
    numberOfBookableSeats: 1,
    itineraries: [
      {
        duration: "PT9H5M",
        segments: [
          {
            departure: {
              iataCode: "JFK",
              terminal: "5",
              at: "2026-01-25T11:45:00",
            },
            arrival: {
              iataCode: "LAS",
              terminal: "3",
              at: "2026-01-25T14:50:00",
            },
            carrierCode: "B6",
            number: "2511",
            aircraft: {
              code: "32S",
            },
            operating: {
              carrierCode: "B6",
            },
            duration: "PT6H5M",
            id: "3",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "LAS",
              terminal: "3",
              at: "2026-01-25T16:30:00",
            },
            arrival: {
              iataCode: "LAX",
              terminal: "6",
              at: "2026-01-25T17:50:00",
            },
            carrierCode: "HA",
            number: "6114",
            aircraft: {
              code: "E75",
            },
            operating: {
              carrierName: "HORIZON AIR AS ALASKAHORIZON",
            },
            duration: "PT1H20M",
            id: "4",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "2385.58",
      base: "2199.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "2385.58",
      additionalServices: [
        {
          amount: "30.06",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["HA"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "2385.58",
          base: "2199.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "3",
            cabin: "ECONOMY",
            fareBasis: "MI7AUEY5",
            brandedFare: "AN",
            brandedFareLabel: "BLUE",
            class: "M",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
            amenities: [
              {
                description: "CHECKED BAG FIRST",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHECKED BAG SECOND",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "EXTRA LEGROOM",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ADVANCE SEAT SELECTION",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SNACK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "ALCOHOLIC DRINK",
                isChargeable: true,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "NON ALCOHOLIC DRINK",
                isChargeable: false,
                amenityType: "MEAL",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "4",
            cabin: "ECONOMY",
            fareBasis: "Y",
            class: "Y",
            includedCheckedBags: {
              quantity: 0,
            },
            includedCabinBags: {
              quantity: 2,
            },
          },
        ],
      },
    ],
  },
];

export const airlines = [
  "United Airlines",
  "Delta",
  "American Airlines",
  "JetBlue",
  "Southwest",
  "Spirit Airlines",
  "Alaska Airlines",
];


const dictionary = {
    "locations": {
        "LAX": {
            "cityCode": "LAX",
            "countryCode": "US"
        },
        "ONT": {
            "cityCode": "LAX",
            "countryCode": "US"
        },
        "PDX": {
            "cityCode": "PDX",
            "countryCode": "US"
        },
        "FLL": {
            "cityCode": "FLL",
            "countryCode": "US"
        },
        "BOS": {
            "cityCode": "BOS",
            "countryCode": "US"
        },
        "ATL": {
            "cityCode": "ATL",
            "countryCode": "US"
        },
        "SFO": {
            "cityCode": "SFO",
            "countryCode": "US"
        },
        "JFK": {
            "cityCode": "NYC",
            "countryCode": "US"
        },
        "SEA": {
            "cityCode": "SEA",
            "countryCode": "US"
        },
        "LAS": {
            "cityCode": "LAS",
            "countryCode": "US"
        }
    },
    "aircraft": {
        "223": "AIRBUS  A220-300",
        "320": "AIRBUS A320",
        "321": "AIRBUS A321",
        "737": "BOEING 737 ALL SERIES PASSENGER",
        "744": "BOEING 747-400",
        "767": "BOEING 767",
        "777": "BOEING 777-200/300",
        "32Q": "AIRBUS A321NEO",
        "E75": "EMBRAER 175",
        "32S": "AIRBUS INDUSTRIE A318/A319/A320/A321",
        "73J": "BOEING 737-900",
        "32N": "AIRBUS A320NEO"
    },
    "currencies": {
        "EUR": "EURO"
    },
    "carriers": {
        "AS": "ALASKA AIRLINES",
        "6X": "AMADEUS SIX",
        "F9": "FRONTIER AIRLINES",
        "B6": "JETBLUE AIRWAYS",
        "HA": "HAWAIIAN AIRLINES"
    }
}