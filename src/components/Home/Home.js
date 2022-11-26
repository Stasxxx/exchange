import { useEffect } from "react"
import { getPositionInfo } from "../../services/api";
import { useState } from "react";

export const Home = () => {
    const [currency, setCurrency] = useState('USD');

    useEffect(() => {
        function success(pos) {
        const crd = pos.coords;

            getPositionInfo(crd.latitude, crd.longitude).then(({ results }) => {
                setCurrency(results[0].annotations.currency.iso_code);
        } )}

        navigator.geolocation.getCurrentPosition(success);
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

    return (
        <div>
            <p>Current currency { currency }</p>
          
            <form>
                <label>
                    Input the currency
                    <input></input>
                </label>
            <button type="submit">Exchange</button>
            </form>
            
        </div>
    )
}