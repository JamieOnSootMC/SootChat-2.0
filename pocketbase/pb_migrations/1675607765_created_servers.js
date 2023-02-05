migrate((db) => {
  const collection = new Collection({
    "id": "gjf3apl6xvuch1c",
    "created": "2023-02-05 14:36:05.887Z",
    "updated": "2023-02-05 14:36:05.887Z",
    "name": "servers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uw6eufaw",
        "name": "serverName",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gjf3apl6xvuch1c");

  return dao.deleteCollection(collection);
})
