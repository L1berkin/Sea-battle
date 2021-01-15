import Input from '../../components/Input/Input'
import Title from '../../components/Title/Title'
import classes from './StartPage.module.scss'

function StartPage() {
  return (
    <main className={classes.StartPage}>
      <Title text="Морской бой" size="6em" />
      <div className={classes.inputBox}>
        <Input 
          label="Введите имя игрока"
        />
        <Input 
          label="Введите имя игрока"
        />
      </div>
      <button className={classes.btn}>Старт</button>
    </main>
  )
}

export default StartPage;