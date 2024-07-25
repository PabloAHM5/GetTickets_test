class ProcessTickets {
    static extract(data) {
        const tickets = data.data.getTickets.rows;

        const stateCounts = tickets.reduce((acc, ticket) => {
            acc[ticket.status] = (acc[ticket.status] || 0) + 1;
            return acc;
        }, {});

        const channelCounts = tickets.reduce((acc, ticket) => {
            acc[ticket.channel] = (acc[ticket.channel] || 0) + 1;
            return acc;
        }, {});

        const categoryCounts = tickets.reduce((acc, ticket) => {
            const category = ticket.OLBTicketSubcategory.OLBTicketCategory.key;
            acc[category] = (acc[category] || 0) + 1;
            return acc;
        }, {});

        return {
            stateCounts,
            channelCounts,
            categoryCounts
        };
    }
}

module.exports = ProcessTickets;
