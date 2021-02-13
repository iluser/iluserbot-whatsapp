const fetch = require('node-fetch');

exports.GetSoal = (pesan) => new Promise((resolve, reject) => {
    const boday = { "operationName": "SearchQuestionQuery", "variables": { "query": pesan, "first": 3, "after": null }, "query": "query SearchQuestionQuery($query: String!, $first: Int, $after:ID) {  questionSearch(query:$query, first: $first, after:$after) {    __typename    edges {      __typename      node {        __typename        ...SearchQuestionsFragment      }      highlight {        __typename        contentFragments      }    }    pageInfo {      __typename      endCursor      hasNextPage      hasPreviousPage    }  }}fragment SearchQuestionsFragment on Question {  __typename  id  databaseId  answers {    __typename    hasVerified    nodes {      __typename      verification {        __typename      }      thanksCount      rating      ratesCount    }  }}" }
    fetch(`https://graphql.z-dn.net/id`, {
      method: 'POST',
      headers: {
        'Host': 'graphql.z-dn.net',
        'accept': 'application/json',
        'x-apollo-operation-id': '0a72198f847bf9a6e88a8656cda47787a4b469ba7049e9097928a9b436815de4',
        'x-apollo-operation-name': 'SearchQuestionQuery',
        'x-apollo-cache-key': 'a827c271ee6abbb5a02b268b3ba88729',
        'x-apollo-cache-fetch-strategy': 'NETWORK_ONLY',
        'x-apollo-expire-timeout': 0,
        'x-apollo-expire-after-read': false,
        'x-apollo-prefetch': false,
        'x-apollo-cache-do-not-store': false,
        'x-b-token-guest': '4a65467f538efe964998deceb4fd63091c909483',
        'user-agent': 'Android-App 5.2.10 Android-App 5.2.10',
        'content-type': 'application/json; charset=utf-8',
        'accept-encoding': 'gzip'
      },
      body: JSON.stringify(boday)
    })
      .then(async res => {
        const result = {
          body: await res.json()
        };
        resolve(result)
      })
      .catch(err => reject(err))
  });
  
  exports.GetJawaban = (id) => new Promise((resolve, reject) => {
    const boday = {
      "operationName": "QuestionByIdQuery",
      "variables": {
        "id": id
      },
      "query": "query QuestionByIdQuery($id: Int!) {  questionById(id: $id) {    __typename    databaseId    content    points    grade {      __typename      databaseId    }    subject {      __typename      databaseId      name      slug    }    author {      __typename      ...AuthorFragment    }    canBeAnswered    attachments {      __typename      ...AttachmentFragment    }    answers {      __typename      hasVerified      nodes {        __typename        databaseId        content        author {          __typename          ...AuthorFragment        }        thanksCount        isBest        created        attachments {          __typename          ...AttachmentFragment        }        verification {          __typename          hasAccess          approval {            __typename            approvedTime          }        }        comments(last: 0) {          __typename          count        }        rating        ratesCount      }    }  }}fragment AuthorFragment on User {  __typename  databaseId  nick  rank {    __typename    name  }  avatar {    __typename    thumbnailUrl  }}fragment AttachmentFragment on Attachment {  __typename  databaseId  url  extension}"
    }
    fetch(`https://graphql.z-dn.net/id`, {
      method: 'POST',
      headers: {
        'Host': 'graphql.z-dn.net',
        'accept': 'application/json',
        'x-apollo-operation-id': '0a72198f847bf9a6e88a8656cda47787a4b469ba7049e9097928a9b436815de4',
        'x-apollo-operation-name': 'SearchQuestionQuery',
        'x-apollo-cache-key': 'a827c271ee6abbb5a02b268b3ba88729',
        'x-apollo-cache-fetch-strategy': 'NETWORK_ONLY',
        'x-apollo-expire-timeout': 0,
        'x-apollo-expire-after-read': false,
        'x-apollo-prefetch': false,
        'x-apollo-cache-do-not-store': false,
        'x-b-token-guest': '4a65467f538efe964998deceb4fd63091c909483',
        'user-agent': 'Android-App 5.2.10 Android-App 5.2.10',
        'content-type': 'application/json; charset=utf-8',
        'accept-encoding': 'gzip'
      },
      body: JSON.stringify(boday)
    })
      .then(async res => {
        const result = {
          body: await res.json()
        };
        resolve(result)
      })
      .catch(err => reject(err))
  });