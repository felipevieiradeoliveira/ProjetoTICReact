import style from './Footer.module.css'

const Footer = (props) => {

    const {nomeAutor} = props;
    return(
        <div className={style.Footer}>
            {nomeAutor}
        </div>
    )
}

export {Footer};