migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eqw3iy8lffobgzb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kjfmcy2q",
    "name": "server_name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eqw3iy8lffobgzb")

  // remove
  collection.schema.removeField("kjfmcy2q")

  return dao.saveCollection(collection)
})
