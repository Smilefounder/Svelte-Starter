<script>
import { Link, Router, Route } from 'svero';

import Home from '~/home/Home';
import HelloWorld from '~/hello-world/HelloWorld';
import Counter from '~/counter/Counter';
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/hello-world" component={HelloWorld} />
  <Route path="/counter" component={Counter} />
</Router>
