const { createInvoice } = require('./invoice.js')
const invoice = {
    shipping: {
        name: "Nishchit_Malasana",
        address: "TechStreet Newyork",
        city: "San Francisco",
        state: "CA",
        country: "US",
        postal_code: 363641
    },
    items: [{
            item: "3060 RTX",
            description: "Nvidia GPU 30 series",
            quantity: 2,
            amount: 6000
        },
        {
            item: "3090 RTX",
            description: "Nvidia GPU 30 series",
            quantity: 4,
            amount: 6000
        },
        {
            item: "3070 RTX",
            description: "Nvidia GPU 30 series",
            quantity: 1,
            amount: 2000
        }
    ],
    subtotal: 38000,
    paid: 0,
    invoice_nr: 1234
};

createInvoice(invoice, "./public/" + invoice.shipping.name + ".pdf");