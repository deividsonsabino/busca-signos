import React from 'react'
import Home from './pages/Home';

import { Switch, Route } from 'react-router-dom';

export default function main() {
    return (
        <main>
            <Switch>
                <Route path='/' component={Home} />
            </Switch>
        </main>
    )
}
