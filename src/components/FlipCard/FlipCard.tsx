import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import hero1_image from '../../assets/images/legos/lego_cpt_america.png';
import hero2_image from '../../assets/images/legos/lego_spider_man.png';
import hero3_image from '../../assets/images/legos/lego_cpt_marvel.png';
import backArrow_image from '../../assets/images/icons/243653_square_back_arrow_left_icon.png';
import forwardArrow_image from '../../assets/images/icons/243661_forward_right_square_arrow_icon.png';

function flip_anim1() 
{
    (document.getElementById('card_1') as HTMLImageElement).className = 'card_images';
    (document.getElementById('card_1_b') as HTMLDivElement).className = 'card_borders';
    setTimeout(function() {
        (document.getElementById('card_1') as HTMLImageElement).className = 'card_image';
        (document.getElementById('card_1_b') as HTMLDivElement).className = 'card_border';
    }, 920);
}
function flip_anim2() 
{
    (document.getElementById('card_2') as HTMLImageElement).className = 'card_images';
    (document.getElementById('card_2_b') as HTMLDivElement).className = 'card_borders';
    setTimeout(function() {
        (document.getElementById('card_2') as HTMLImageElement).className = 'card_image';
        (document.getElementById('card_2_b') as HTMLDivElement).className = 'card_border';
    }, 920);
}
function flip_anim3() 
{
    (document.getElementById('card_3') as HTMLImageElement).className = 'card_images';
    (document.getElementById('card_3_b') as HTMLDivElement).className = 'card_borders';
    setTimeout(function() {
        (document.getElementById('card_3') as HTMLImageElement).className = 'card_image';
        (document.getElementById('card_3_b') as HTMLDivElement).className = 'card_border';
    }, 920);
}

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    card_image:{
        width: '100%'
    },
    card_border:{
        border: '4px solid goldenrod',
        'border-radius': '15%',
        padding: '5%',
        'box-shadow': '10px 10px 10px grey'
    },
    card_borders:{
        border: '4px solid goldenrod',
        'border-radius': '15%',
        padding: '5%',
        'box-shadow': '10px 10px 10px grey',
        'animation-name': 'flip',
        'animation-duration': '1s',
        'animation-iteration-count': '1'
    },
    card_images:{
        'animation-name': 'flip',
        'animation-duration': '1s',
        'animation-iteration-count': '1'
    },
    forward_arrow:{
        'background-image': `url(${forwardArrow_image})`,
        width: '50px',
        height: '50px',
        'background-size': '100%',
        'box-shadow': '2px 2px 5px grey',
        'background-repeat': 'no-repeat'
    },
    back_arrow:{
        'background-image': `url(${backArrow_image})`,
        width: '50px',
        height: '50px',
        'background-size': '100%',
        'box-shadow': '2px 2px 5px grey',
        'background-repeat': 'no-repeat'
    },
    image_credit:{
        display: 'flex',
        'justify-content': 'right'
    },
    row:{
        display: 'flex',
        
    },
    hero_card:{
        background: 'white',
        'border-radius': '15%',
        width: '30%'
    },
    '@keyframes flip': {
        '0%':{
            width: '100%',
            height: '100%',      
            opacity: '100%',
        },
        '50%':{
            width: '0%',
            height: '100%',
            opacity: '0%',
            'margin-left': '50%',
        },
        '100%':{
            width: '100%',
            height: '100%',
            opacity: '100%'
        }
    }
})

export const FlipCard = () => {

    const classes = useStyles();

    return (
        <div>
            <h3>Here are the cards you've collected so far:</h3>
            <p>(click to flip the card for hero details)</p>
            <div className={classes.row}>
                <div>
                    <button className={classes.back_arrow}></button>
                </div>
                <div className={classes.hero_card}>
                    <div className={classes.card_border} id={'card_1_b'}>
                        <img onClick={flip_anim1} className={classes.card_image} src={`${hero1_image}`} alt={"Captain America Image"} id={"card_1"} />
                    </div>
                </div>
                <div className={classes.hero_card}>
                    <div className={classes.card_border} id={"card_2_b"}>
                        <img onClick={flip_anim2} className={classes.card_image} src={`${hero2_image}`} alt={"Spider Man Image"} id={"card_2"} />
                    </div>
                </div>
                <div className={classes.hero_card}>
                    <div className={classes.card_border} id={"card_3_b"}>
                        <img onClick={flip_anim3} className={classes.card_image} src={`${hero3_image}`} alt={"Captain Marvel Image"} id={"card_3"} />
                    </div>
                </div>
                <div>
                    <button className={classes.forward_arrow}></button>
                </div>
            </div>
            <div className={classes.image_credit}>
                <a href={"https://www.freepnglogos.com/pics/lego"}>Lego pics from freepnglogos.com</a>
            </div>
        </div>
    )
}