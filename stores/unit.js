import unitServices from '~/services/unitServices'
import {
    defineStore
} from 'pinia'

export const useUnitStore = defineStore('unit', () => {
    const unit = ref([])
    const detailUnit = ref({});

    const getUnit = () => {
        return unit.value
    }

    const setUnit = (value) => {
        unit.value = value
    }

    const getUnitService = async (payload) => {
        const query = {
            name: payload.name ? payload.name : "",
            min_price: payload.min_price ? payload.min_price : "",
            max_price: payload.max_price ? payload.max_price : "",
            min_year: payload.min_year ? payload.min_year : "",
            max_year: payload.max_year ? payload.max_year : "",
            merk: payload.merk ? payload.merk : "",
            type: payload.type ? payload.type : "",
            plat_nomor: payload.plat_nomor ? payload.plat_nomor : "",
            bahan_bakar: payload.bahan_bakar ? payload.bahan_bakar : "",
            warna: payload.warna ? payload.warna : "",
            tipe_body: payload.tipe_body ? payload.tipe_body : "",
            transmisi: payload.transmisi ? payload.transmisi : ""
        }
        try {
            const res = await unitServices.getUnit(query)
            console.log(res)
            setUnit(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    const getDetailUnit = computed(() => detailUnit.value)

    const setDetailUnit = (data) => {
        detailUnit.value = data
    }

    async function fetchDetailUnit(id) {
        try {

            const res = await unitServices.detailUnit({
                id
            })
            setDetailUnit(res.data)

        } catch (error) {
            console.error(error)
        }
    }

    return {
        unit,
        getUnit,
        getUnitService,
        detailUnit,
        getDetailUnit,
        fetchDetailUnit
    }
})