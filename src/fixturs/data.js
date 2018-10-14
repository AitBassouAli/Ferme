const animals = {
    catygories: [{
        ref: 'pets',
        name :'Les Animaux de la ferme',
        backgroundImg : require('../images/back.jpg'),
        img: require('../images/fermeAn.jpg')
    },
    {
        ref: 'souvages',
        name :'Les animaux sauvages',
        backgroundImg : require('../images/back2.png'),
        img: require('../images/AnimSau.jpg')
    },
    {
        ref: 'birds',
        name :' Les oiseaux',
        backgroundImg : require('../images/back.jpg'),
        img: require('../images/bird.jpg')
    },
    {
        ref: 'aquatic',
        name :'Les animaux aquatiques',
        backgroundImg : require('../images/mer.jpg'),
        img: require('../images/AquaAni.jpg')
    }],
    Pets: {
        backgroundImg : require('../images/backC.jpg'),
        list: [{ 
            name: 'une vache', img: require('../images/vache.png'), keys:['une vache','vache']
        },{
            name: 'une poule', img: require('../images/poule.png'), keys:['une poule','poule']
        },{
            name: 'un cheval', img: require('../images/cheval.png'), keys:['un cheval','cheval']
        },{
            name: 'un mouton', img: require('../images/mouton.png'), keys:['un mouton','mouton']
        },{
            name: 'un lapin', img: require('../images/lapin.png'), keys:['un lapin','lapin']
        }]
    },
    Souvages: {
        backgroundImg : require('../images/back2.png'),
        list: [{ 
            name: 'un lion', img: require('../images/lion-ConvertImage.png'), keys:['un lion','lion']
        },{
            name: 'une girafe', img: require('../images/girrafe.png'), keys:['une girafe','girafe']
        },{
            name: 'un zèbre', img: require('../images/zebra.png'), keys:['un zèbre','zèbre']
        },{
            name: 'un gorille', img: require('../images/Gorille.png'), keys:['un gorille','gorille']
        },{
            name: 'un éléphant', img: require('../images/elephant.png'), keys:['un éléphant','éléphant']
        }]
    },
    Birds: {
        backgroundImg : require('../images/back2.png'),
        list: [{ 
            name: 'un peroquet', img: require('../images/peroquet.png'), keys:['un peroquet','peroquet']
        },{
            name: 'un Pelican', img: require('../images/Pelican.png'), keys:['un Pelican','Pelican']
        },{
            name: 'un Flamant rose', img: require('../images/flamantRose.png'), keys:['un Flamant rose','Flamant rose']
        },{
            name: 'un corbeau', img: require('../images/corbeau.png'), keys:['un corbeau','corbeau']
        },{
            name: 'un Inséparable', img: require('../images/inseparables.png'), keys:['un Inséparable','Inséparable']
        }]
    },
    Aquatic: {
        backgroundImg : require('../images/back2.png'),
        list: [{ 
            name: 'un crabe', img: require('../images/crabe.png'), keys:['un crabe','crabe']
        },{
            name: 'un dauphin', img: require('../images/dauphin.png'), keys:['un dauphin','dauphin']
        },{
            name: 'un hippocampe', img: require('../images/hippocampe.png'), keys:['un hippocampe','hippocampe']
        },{
            name: 'unE Étoile de mer', img: require('../images/etoileDeLaMer.png'), keys:['une Étoile de mer','Étoile de mer']
        },{
            name: 'un requin', img: require('../images/requin.png'), keys:['un requin','requin']
        }]
    }
};
export default animals;