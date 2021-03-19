import React, { Component } from 'react';
import f2 from '../../img/friend2.jpg';
import f3 from '../../img/friend3.jpg'
import f4 from '../../img/friend4.jpg'
import f5 from '../../img/receiver.jpg'

import Addfriend from '../buttons/newfriends'
import Friend from './friend'

const Friends = () => {

  return (

    <div class="flex flex justify-center items-center antialiased font-sans bg-gray-200 h-full min-h-screen max-h-full no-scrollbar p-4">

      <div class="bg-white w-full md:max-w-4xl rounded-lg shadow-lg scrollbar">
        <div class="h-12 flex justify-between items-center border-b border-gray-200 m-4">

          <p class="mx-auto mb-6 text-2xl font-bold text-gray-700">Liste d'amis</p>

        </div>
        <div class="px-6">
          <Friend nom="Lva Chir" img={f2} dateaj="Ajouté depuis Mars 2021" />
          <Friend nom="Kaghim" img={f3} dateaj="Ajouté depuis Janvier 2021" />
          <Friend nom="Sar Ah" img={f4} dateaj="Ajoutée depuis Avril 2021" />
          <Friend nom="Lydia LM" img={f5} dateaj="Ajoutée depuis mars 2021" />
          
        </div>
        <Addfriend />
      </div>

    </div>

  )

}
export default Friends