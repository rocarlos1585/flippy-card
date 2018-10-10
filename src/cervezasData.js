import afortunada from './images/Afortunada.JPG'
import californiaAle from './images/californiaAle.JPG'
import ippolita from './images/Ippolita.JPG'
import stout from './images/Stout.JPG'
import canita from './images/canita.JPG'
import paleAle from './images/paleAle.JPG'
import docepack from './images/docePack.jpg'

export default function CervezasData(){


  var cervezasArray = [];

  cervezasArray [0]={
    imagen : ippolita,
    nombre : 'Ippolita',
    precio : "$45.00",
  };

  cervezasArray [1]={
    imagen : afortunada,
    nombre : 'Afortunada',
    precio : "$45.00",
  };

  cervezasArray[2]={
    imagen : californiaAle,
    nombre : 'California Ale',
    precio : "$45.00",
  };

  cervezasArray[3]={
    imagen : stout,
    nombre : 'Stout',
    precio : "$45.00",
  };

  cervezasArray[4]={
    imagen : canita,
    nombre : 'Canita',
    precio : "$45.00",
  };

  cervezasArray[5]={
    imagen : paleAle,
    nombre : 'Pale Ale',
    precio : "$45.00",
  };


  return cervezasArray;
}
