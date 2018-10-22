const animals = {
    catygories: [{
        ref: 'Les animaux de la ferme',
        name :'Les Animaux de la ferme',
        backgroundImg : require('../images/Logo.jpg'),
        img: require('../images/fermeAn.jpg')
    },
    {
        ref: 'Les animaux sauvages',
        name :'Les animaux sauvages',
        backgroundImg : require('../images/Logo.jpg'),
        img: require('../images/AnimSau.jpg')
    },
    {
        ref: 'Les oiseaux',
        name :' Les oiseaux',
        backgroundImg : require('../images/Logo.jpg'),
        img: require('../images/bird.jpg')
    },
    {
        ref: 'Les animaux aquatiques',
        name :'Les animaux aquatiques',
        backgroundImg : require('../images/Logo.jpg'),
        img: require('../images/AquaAni.jpg')
    }],
    Pets: {
        backgroundImg : require('../images/backC.jpg'),
        list: [{ 
            name: 'une vache', img: require('../images/vache.png'), keys:['une vache','vache'], qst: 'Quel est mon nom ?'
        },{
            name: 'une poule', img: require('../images/poule.png'), keys:['une poule','poule'], qst: 'De quoi s\'agit-il?'
        },{
            name: 'un cheval', img: require('../images/cheval.png'), keys:['un cheval','cheval'], qst: 'Tu me connais ?'
        },{
            name: 'un mouton', img: require('../images/mouton.png'), keys:['un mouton','mouton'], qst: 'Qui suis je?'
        },{
            name: 'un lapin', img: require('../images/lapin.png'), keys:['un lapin','lapin'], qst: 'Dis mon nom !'
        }]
    },
    Souvages: {
        backgroundImg : require('../images/back2.png'),
        list: [{ 
            name: 'un lion', img: require('../images/lion-ConvertImage.png'), keys:['un lion','lion'], qst: 'Qui suis je?'
        },{
            name: 'une girafe', img: require('../images/girrafe.png'), keys:['une girafe','girafe'], qst: 'Dis mon nom !'
        },{
            name: 'un zèbre', img: require('../images/zebra.png'), keys:['un zèbre','zèbre'], qst: 'Quel est mon nom ?'
        },{
            name: 'un gorille', img: require('../images/Gorille.png'), keys:['un gorille','gorille'], qst: 'Tu me connais ?'
        },{
            name: 'un éléphant', img: require('../images/elephant.png'), keys:['un éléphant','éléphant'], qst: 'De quoi s\'agit-il?'
        }]
    },
    Birds: {
        backgroundImg : require('../images/b1.jpg'),
        list: [{ 
            name: 'un peroquet', img: require('../images/peroquet.png'), keys:['un peroquet','peroquet'], qst: 'Tu me connais ?'
        },{
            name: 'un Pelican', img: require('../images/Pelican.png'), keys:['un Pelican','Pelican'], qst: 'Quel est mon nom ?'
        },{
            name: 'un Flamant rose', img: require('../images/flamantRose.png'), keys:['un Flamant rose','Flamant rose'], qst: 'De quoi s\'agit-il?'
        },{
            name: 'un corbeau', img: require('../images/corbeau.png'), keys:['un corbeau','corbeau'], qst: 'Dis mon nom !'
        },{
            name: 'un Inséparable', img: require('../images/inseparables.png'), keys:['un Inséparable','Inséparable'], qst: 'Qui suis je?'
        }]
    },
    Aquatic: {
        backgroundImg : require('../images/backM.jpg'),
        list: [{ 
            name: 'un crabe', img: require('../images/crabe.png'), keys:['un crabe','crabe'], qst: 'Dis mon nom !'
        },{
            name: 'un dauphin', img: require('../images/dauphin.png'), keys:['un dauphin','dauphin'], qst: 'De quoi s\'agit-il?'
        },{
            name: 'un hippocampe', img: require('../images/hippocampe.png'), keys:['un hippocampe','hippocampe'], qst: 'Qui suis je?'
        },{
            name: 'unE Étoile de mer', img: require('../images/etoileDeLaMer.png'), keys:['une Étoile de mer','Étoile de mer'], qst: 'Quel est mon nom ?'
        },{
            name: 'un requin', img: require('../images/requin.png'), keys:['un requin','requin'], qst: 'Tu me connais ?'
        }]
    }
};
export default animals;