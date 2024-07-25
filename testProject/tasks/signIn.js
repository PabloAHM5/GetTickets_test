const axios = require('axios');

class SignIn {
    static performAs(user) {
        return axios.post('https://blossom-olb-api-testing.blossomdev.com/graphql/public', {
            query: `query SignIn($username: String!, $password: String!, $searchQuery: String, $idFi: Int, $urlAuth: String, $role: RoleInput) {
        signIn(username: $username, password: $password, searchQuery: $searchQuery, idFi: $idFi, urlAuth: $urlAuth, role: $role) {
          mfaRequired
          token {
            access_token
            token_type
            expires_in
            refresh_token
            __typename
          }
          session {
            id
            idBlossomUser
            createdAt
            updatedAt
            __typename
          }
          user {
            BlossomUserEmails {
              id
              primary
              verifed
              dateVerifed
              createdAt
              updatedAt
              email
              __typename
            }
            BlossomUserPhones {
              id
              primary
              verifed
              phone
              dateVerifed
              createdAt
              updatedAt
              __typename
            }
            BlossomUserProfile {
              id
              idBlossomUser
              avatar
              firstName
              lastName
              createdAt
              updatedAt
              __typename
            }
            id
            username
            status
            failedAttempts
            createdAt
            updatedAt
            __typename
          }
          __typename
        }
      }`,
            variables: {
                username: "dcastiblanco",
                password: "Secret1234*",
                searchQuery: "redirect=https://testadmin.homecu.blossomdev.com&role=ADMIN",
                idFi: 1,
                urlAuth: "https://testauth.homecu.blossomdev.com",
                role: "ADMIN"
            }
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'https://testauth.homecu.blossomdev.com'
            }
        }).then(response => {
            const token = response.data.data.signIn.token.access_token;
            return token;
        }).catch(error => {
            console.error("Error during sign in:", error);
            throw error;
        });
    }
}

module.exports = SignIn;
