const { query } = require("express")



saveObject = (doc) => {
    return new Promise(async (resolve, reject) => {
        try {
            const savedDoc = await doc.save()
            console.log("save");
            resolve(savedDoc)
        }
        catch (err) {
            console.log("bbbbbbbbbb");
            reject(err)
        }
    })

}

findObject = (Model, filter, populationArr = null) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = Model.findOne(filter)
            if (populationArr) {
                let populatedQuery = await populateObjects(query, populationArr)
                return resolve(populatedQuery)
            }
            else {
                query.exec(async (err, doc) => {
                    if (err)
                        reject(err)
                    else
                        resolve(doc)
                });
            }
        } catch (err) {
            reject(err)
        }
    })
}
createObject = (Model, data) => {
    return new Promise(async (resolve, reject) => {
        // const savedDoc = await doc.save()
        console.log(Model);
        Model.create(data, function (err, savedDoc) {
            if (err) return reject(err);
            resolve(savedDoc);
        });
    })

}

findObjectAndUpdate = (Model, filterArr) => {
    return new Promise(async (resolve, reject) => {
        try {

            const doc = await Model.findOneAndUpdate(...filterArr)
            resolve(doc)
        } catch (err) {
            reject(err)
        }
    })
}

findObjectByIdAndUpdate = (Model, id, optionsArr) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(Model, id, optionsArr);
            const doc = await Model.findByIdAndUpdate(id, ...optionsArr)
            console.log(doc);
            resolve(doc)
        } catch (err) {
            reject(err)
        }
    })
}

countDoc = (Model) => {
    return new Promise(async (resolve, reject) => {
        Model.countDocuments({}, (err, count) => {
            if (err) {
                reject(err)
            }
            resolve(count)
        })
    })
}

initObj = (Model, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(Model)
            let obj = new Model(data)
            console.log(obj)
            resolve(obj)
        } catch (err) {
            reject(err)
        }
    })
}

findObjectByIdAndDelete = (Model, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const doc = await Model.findByIdAndDelete(id)
            resolve(doc)
        } catch (err) { }
    })
}

findObjectById = (Model, objectId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const doc = await Model.findById(objectId)
            resolve(doc)
        } catch (err) { }
    })
}
pushObject = (doc, val) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(doc)
            const newDoc = await doc.push(val)
            resolve(newDoc)
        } catch (err) {
            console.log(err)
            reject(err)
        }
    })
}

module.exports = {
    saveObject,
    findObject,
    findObjectAndUpdate,
    findObjectByIdAndUpdate,
    countDoc,
    initObj,
    findObjectById,
    pushObject,
    createObject,
}