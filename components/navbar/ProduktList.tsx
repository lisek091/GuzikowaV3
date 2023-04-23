import React,{useState} from 'react'

interface ProduktListProps {
    visibleOffers:boolean;
}

const ProduktList:React.FC<ProduktListProps> = ({visibleOffers}) => {
    if(!visibleOffers){
        return null
    }
    else{
        return (
          <div className={``}>
              <h1>Lista produktów dostepnych w systemie</h1>
              <p>Okna PCV</p>
              <p>Systemy wentylacyjne</p>
          </div>
        )
    }

}

export default ProduktList