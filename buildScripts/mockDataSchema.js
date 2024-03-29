export const schema = {
  "type":"object",
  "properties":{
    "users":{
      "type":"array",
      "minItems":3,
      "maxItems":5,
      "items":{
        "type":"object",
        "properties":{
          "id":{
            "type":"number",
            "unique":true,
            "minimum":1
          },
          "firstName":{
            "type":"string",
            "faker":"name.firstName"
          },
          "lastName":{
            "type":"string",
            "faker":"name.lastName",
          },
          "email":{
            "email":"string",
            "faker":"internet.email",
          }
        },
      required: ['items','id', 'firstName', 'lastName', 'email']
    }
  }
},
  required: ['users']
};
