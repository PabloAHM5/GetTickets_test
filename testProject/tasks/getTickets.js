const axios = require('axios');

class GetTickets {
    static async performAs(user, token,status=[]) {
        try {
            const response = await axios.post(
                'https://blossom-olb-api-testing.blossomdev.com/graphql/admin',
                {
                    query: `query getTickets($input: GetTicketsInput) {
                        getTickets(input: $input) {
                            count
                            rows {
                                id
                                idOLBTicketPriority
                                idOLBTicketSubcategory
                                idOLBUserRequest
                                idOLBUserAsignee
                                status
                                createdAt
                                updatedAt
                                channel
                                OLBTicketSubcategory {
                                    id
                                    createdAt
                                    updatedAt
                                    idOLBTicketCategory
                                    key
                                    OLBTicketCategory {
                                        key
                                        __typename
                                    }
                                    __typename
                                }
                                OLBTicketPriority {
                                    id
                                    createdAt
                                    updatedAt
                                    key
                                    icon
                                    priority
                                    __typename
                                }
                                OLBUserRequest {
                                    id
                                    idBlossomUser
                                    idFi
                                    idOLBFiSubRole
                                    createdAt
                                    updatedAt
                                    OLBUserAccounts {
                                        OLBAccountNumber {
                                            accountNumber
                                            __typename
                                        }
                                        __typename
                                    }
                                    BlossomUser {
                                        id
                                        username
                                        status
                                        failedAttempts
                                        createdAt
                                        updatedAt
                                        BlossomUserProfile {
                                            id
                                            firstName
                                            lastName
                                            avatar
                                            ssn
                                            birthDay
                                            createdAt
                                            updatedAt
                                            __typename
                                        }
                                        __typename
                                    }
                                    __typename
                                }
                                OLBUserAsignee {
                                    id
                                    idBlossomUser
                                    idFi
                                    idOLBFiSubRole
                                    createdAt
                                    updatedAt
                                    BlossomUser {
                                        id
                                        username
                                        status
                                        failedAttempts
                                        createdAt
                                        updatedAt
                                        BlossomUserProfile {
                                            id
                                            firstName
                                            lastName
                                            avatar
                                            ssn
                                            birthDay
                                            createdAt
                                            updatedAt
                                            __typename
                                        }
                                        __typename
                                    }
                                    OLBUserProfile {
                                        id
                                        avatar
                                        firstName
                                        lastName
                                        __typename
                                    }
                                    __typename
                                }
                                formValues
                                OLBUsersGroup {
                                    id
                                    name
                                    description
                                    idFi
                                    createdAt
                                    updatedAt
                                    OLBUsersGroupUsers {
                                        idOLBUsersGroup
                                        idOLBUser
                                        isLead
                                        createdAt
                                        updatedAt
                                        __typename
                                    }
                                    __typename
                                }
                                __typename
                            }
                            __typename
                        }
                    }`,
                    variables: {
                        input: {
                            idFi: 1,
                            offset: 0,
                            limit: 30,
                            search: "",
                            status: status,
                            priority: [],
                            category: [],
                            startDate: "2024-06-15 05:00:00",
                            endDate: "2024-07-16 04:59:59",
                            idOLBUserAsignee: [],
                            idOLBUserRequest: [],
                            order: "DATE_UPDATE_DESC",
                            unassignedOLBUserGroup: false
                        }
                    }
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                        'olb-user': '13843',
                        'accept-language': 'es-ES,es;q=0.9',
                        'fingerprint': 'd6294fb7d0728e913886588660f38de2',
                        'idblossomusersession': '18e75d79-e140-45cf-bcb8-3bf13d5c7c9f',
                        'origin': 'https://admin.wp.blossombeta.com',
                        'priority': 'u=1, i',
                        'referer': 'https://admin.wp.blossombeta.com/',
                        'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': 'macOS',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'cross-site',
                        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
                    }
                }
            );

            return response.data;
        } catch (error) {
            console.error("Error fetching tickets:", error);
            throw error;
        }
    }
}

module.exports = GetTickets;
