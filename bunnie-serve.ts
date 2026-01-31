import * as bunnie from "bunnie"

bunnie.serve(async (path) => await import(path))
