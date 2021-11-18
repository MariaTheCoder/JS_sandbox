// import React, { useState } from 'react';
const libraries = ['GUENEY1'];
const restructuredData = []



function getLibraryTables(libraryName) {
  return new Promise((resolve, reject) => {
    if (!libraryName) reject("No library name supplied");

    setTimeout(() => {
      resolve(
        {
          "data": {
            "tables": [
              {
                "NAME": "CUSTOMER"
              },
              {
                "NAME": "ITEM"
              },
              {
                "NAME": "PURCHASE"
              }
            ]
          }
        })
    }, 250);
  })
}

libraries.forEach(library => {
  getLibraryTables(library).then(response => {
    const thirdBucket = restructuredData;

    thirdBucket.push(
      {
        "library": library,
        "tables": response.data.tables,
      })
    restructuredData = thirdBucket;
  })
});