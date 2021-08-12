export const menu = {
    admin: [
        {
            "icon": "fa-home",
            "title": "Dashboard",
            "to": "/dashboard",
            "items": []
        },
        {
            "icon": "fa-book",
            "title": "Material UI",
            "items": [
                {
                    "title": "Inputs",
                    "items": [
                        {
                            "title": "Autocomplete",
                            "to": "/google-material/inputs/autocomplete"
                        },
                        {
                            "title": "Buttons",
                            "to": "/google-material/inputs/buttons"
                        },
                        {
                            "title": "Checkboxes",
                            "to": "/google-material/inputs/checkboxes"
                        },
                    ]
                },
            ]
        },
        {
            "icon": "fa-check",
            "title": "Bootstrap",
            "items": [
                {
                    "title": "Alert",
                    "to": "/react-bootstrap/alert"
                },
                {
                    "title": "Badge",
                    "to": "/react-bootstrap/badge"
                },
            ]
        },
        {
            "icon": "fa-cubes",
            "title": "Custom",
            "items": [
                {
                    "title": "eCommerce",
                    "items": [
                        {
                            "title": "Customers",
                            "to": "/e-commerce/customers"
                        },
                        {
                            "title": "Products",
                            "to": "/e-commerce/products"
                        },
                    ]
                },
                {
                    "title": "Layout Builder",
                    "to": "/builder"
                },
            ]
        },
    ],
    manager: [
        {
            "icon": "fa-home",
            "title": "Dashboard",
            "to": "/dashboard",
            "items": []
        },
        {
            "icon": "fa-cubes",
            "title": "Custom",
            "items": [
                {
                    "title": "eCommerce",
                    "items": [
                        {
                            "title": "Customers",
                            "to": "/e-commerce/customers"
                        },
                        {
                            "title": "Products",
                            "to": "/e-commerce/products"
                        },
                    ]
                },
                {
                    "title": "Layout Builder",
                    "to": "/builder"
                },
            ]
        },
    ],
    guest: [
        {
            "icon": "fa-home",
            "title": "Dashboard",
            "to": "/dashboard",
            "items": []
        },
    ]
}