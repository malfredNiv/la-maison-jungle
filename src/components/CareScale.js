import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function CareScale({scaleValue, careType}) {
    //const scaleValue = props.scaleValue
    //const { scaleValue, careType } = props
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? <img src={sun} alt='sun' /> : <img src={water} alt='water' />

    

    const ScaleCare = {
        water: {
            1: 'peu d\'arrosage',
            2: 'arrosage modéré',
            3: 'beaucoup d\'arrosage'
        },
        light: {
            1: 'peu d\'ensoleillement',
            2: 'ensoleillement modéré',
            3: 'beaucoup d\'ensoleillement'
        }
    }
    return (
        <div onClick={() => handleClick(scaleValue, careType)}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
                
            )}
        </div>
    )

    function handleClick(scaleValue, careType) {
        console.log('scaleValue', scaleValue);
        console.log('careType', careType);
        alert(
            careType === 'light' ? `De type light, ${ScaleCare[careType][scaleValue]}` : `De type water, cette plante requiert  ${ScaleCare[careType][scaleValue]}`
        )
    }
}

export default CareScale