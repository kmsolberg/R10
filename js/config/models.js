import Realm from 'realm';

const Fave = {
    name: 'Fave',
    primaryKey: 'id',
    properties: {
        id: 'string',
        faved_on: 'date'
    }
}

const realm = new Realm({schema: [Fave]})

console.log('path', realm.path)

export const addFave = (faveID) => {
    realm.write(() => {
        realm.create('Fave', {id: faveID, faved_on: new Date()})
    })
}

export const removeFave = (faveID) => {
    let fave = realm.objects('Fave').filtered({id: faveID})
    
    realm.write(() => {
        realm.delete(fave)
    })
}

export const getFaves = () => {
    realm.write(() => {
        realm.objects('Fave')
    })
}

export default realm;
