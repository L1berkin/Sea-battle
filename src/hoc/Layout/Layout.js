import classes from "./Layout.module.scss";

function Layout({children}) {
  return (
    <div className={classes.Layout}>
      {children}
    </div>
  )
}

export default Layout;