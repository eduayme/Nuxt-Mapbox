import { Map } from "mapbox-gl";
import { _useMapboxInstances } from "./useMapboxInstances";
import { computed, ComputedRef } from "vue"

export function _useMapboxInstance(key: string): ComputedRef<Map | null>{
    const map = computed(() => {
        return _useMapboxInstances()?.value[key] || null
    })
    return map
}
