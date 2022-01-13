import React from "react"

export default function Header() {
  return <header className="bg-primary text-white">
    <div className="container text-center">
      <img width="125" height="125" src="https://graph.facebook.com/1243067599/picture?type=square" alt="..." className="rounded-circle" />
      <h1>Survey Application</h1>

    </div>
  </header>
}

Header.displayName = 'HomePageHeader'
