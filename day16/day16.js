// part1

const formatTicketFields = ticketFields => {
  let possibleNums = [];
  const fields = Object.keys(ticketFields);
  fields.forEach(field => {
    ticketFields[field].forEach(range => {
      for (let i = range[0]; i < range[1] +1; i++) {
        if (!possibleNums.includes(i)) {
          possibleNums.push(i);
        }
      }
    })
  })
  return possibleNums
}

// formatTicketFields(ticketFields)

const checkValidTickets = (tickets, ticketFields) => {
  const possibleNums = formatTicketFields(ticketFields);
  return tickets.reduce((sumInvalid, ticket) => {
    ticket.forEach(num => {
      if (!possibleNums.includes(num)) {
        sumInvalid += num
      }
    })
    return sumInvalid
  }, 0)
}

// part2

const ticketFields = input[0];
const myTicket = input[1];
const tickets = input[2];

const formatTicketFields = ticketFields => {
  let possibleNums = [];
  const fields = Object.keys(ticketFields);
  fields.forEach(field => {
    ticketFields[field].forEach(range => {
      for (let i = range[0]; i < range[1] +1; i++) {
        if (!possibleNums.includes(i)) {
          possibleNums.push(i);
        }
      }
    })
  })
  return possibleNums
}

const formatTicketFieldsRange = ticketFields => {
  const fields = Object.keys(ticketFields);
  fields.forEach(field => {
    let newValue = []
    ticketFields[field].forEach(range => {
      let nums = []
      for (let i = range[0]; i < range[1] +1; i++) {
        nums.push(i);
      }
      newValue.push(nums)
    })
    ticketFields[field] = newValue
  })
  return ticketFields
}

const removeInvalidTickets = (tickets, ticketFields) => {
  const possibleNums = formatTicketFields(ticketFields);
  return tickets.reduce((validTickets, ticket) => {
    let validCheck = true;
    ticket.forEach(num => {
      if (!possibleNums.includes(num)) {
        validCheck = false;
      }
    })
    if (validCheck) {
      validTickets.push(ticket)
    }
    return validTickets
  }, [])
}

const findFieldOrder = (tickets, ticketFields, myTicket) => {
  const validTickets = removeInvalidTickets(tickets, ticketFields);
  const ticketFieldsWithRange = formatTicketFieldsRange(ticketFields);
  let fieldsInOrder = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  let fieldOrders = {};
  for (let ticketNum = 0; ticketNum < validTickets[0].length; ticketNum++) {
    let fields = Object.keys(ticketFieldsWithRange);
    for (let ticket = 0; ticket < validTickets.length; ticket++) {
      const currentNum = validTickets[ticket][ticketNum];
      fields = fields.filter(field => {
        return ticketFieldsWithRange[field][0].includes(currentNum) || ticketFieldsWithRange[field][1].includes(currentNum)
      })
    }
    fieldOrders[ticketNum] = fields
  }
  const keys = Object.keys(fieldOrders);
  fieldsInOrder = narrowResults(keys, fieldsInOrder, fieldOrders)
  return fieldsInOrder.reduce((product, field, index) => {
    if (field.includes('departure')){
      product *= myTicket[index]
    }
    return product
  }, 1)
}

const narrowResults = (keys, fieldsInOrder, fieldOrders) => {
  if (keys.length === 0) {
    return fieldsInOrder;
  }
  let currentField;
  let currentFieldIndex
  keys.forEach((key, index) => {
    if (fieldOrders[key].length === 1) {
      fieldsInOrder[parseInt(key)] = fieldOrders[key][0];
      currentField = fieldOrders[key][0];
      currentFieldIndex = index;
    }
  });
  keys.forEach(key => {
    fieldOrders[key] = fieldOrders[key].filter(field => field !== currentField);
  });
  keys.splice(currentFieldIndex, 1);
  return narrowResults(keys, fieldsInOrder, fieldOrders);
}

findFieldOrder(tickets, ticketFields, myTicket)
