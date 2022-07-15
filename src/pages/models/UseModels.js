import bus from '../../image/bus.png';
import miniBus from '../../image/mini-bus.png';

export default function UseModels() {
    const data = [
        {
            name: 'bus',
            productImg: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/20038643/Arrival_Bus_Launch_Tunnel_Rear.jpg',
            models: [
                {
                    modelName: 'E-Mass Transit',
                    desc: 'Battery Capacity 44.5 kWh / 400 hp / 195 mi range',
                    id: 1,
                    className: 'e-mass-bus',
                    galleryBanner: bus,
                    galleryBtnImg: 'https://i.pinimg.com/736x/40/2f/27/402f2792052bc409213b9030839fb893--buses.jpg',
                    exterior: ['https://public.das.arrival.com/processed/7bc4bb3f-5e3e-445d-8c05-7c4c4eed9948_00__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/47dbd3c8-fe22-45ac-9275-51f758ae1db0_01__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/ce0b0bae-f3b1-4d5d-8e16-d95ad653d818_02__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/d664cffe-3add-454f-adf2-f082346c3b33_03__bus--gallery-min-1920w.jpeg',],
                    interior: ['https://public.das.arrival.com/processed/8727cc2f-fd84-45c9-bf66-b340ef8eefc7_04__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/58d11bb4-6e87-408c-ae97-3c572ab4c0c1_05__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/2c098e10-b468-4b1c-8393-da8b9df67aae_06__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/eb4579fc-da8a-40fc-8177-ff755ffd26ae_07__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/f275b0a8-bf7a-4f6e-aea4-816e4c2066ee_08__bus--gallery-min-3840w.jpeg',]
                },
                {
                    modelName: 'Q-Mini Bus',
                    desc: 'Battery Capacity 44.5 kWh / 400 hp / 195 mi range',
                    id: 2,
                    className: 'q-mini-bus',
                    galleryBtnImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Dublin_Bus%2C_Volvo_B9TL_Alexander_Dennis_Enviro500_%288203459160%29.jpg/1280px-Dublin_Bus%2C_Volvo_B9TL_Alexander_Dennis_Enviro500_%288203459160%29.jpg',
                    galleryBanner: miniBus,
                    exterior: ['https://imageio.forbes.com/specials-images/imageserve/605155aba5bc3e9ed3a5fc4f/Arrival-North-Carolina-Micro-factory/0x0.jpg?format=jpg&width=960',
                        'https://public.das.arrival.com/processed/47dbd3c8-fe22-45ac-9275-51f758ae1db0_01__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/ce0b0bae-f3b1-4d5d-8e16-d95ad653d818_02__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/d664cffe-3add-454f-adf2-f082346c3b33_03__bus--gallery-min-1920w.jpeg',],
                    interior: ['https://public.das.arrival.com/processed/8727cc2f-fd84-45c9-bf66-b340ef8eefc7_04__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/58d11bb4-6e87-408c-ae97-3c572ab4c0c1_05__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/2c098e10-b468-4b1c-8393-da8b9df67aae_06__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/eb4579fc-da8a-40fc-8177-ff755ffd26ae_07__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/f275b0a8-bf7a-4f6e-aea4-816e4c2066ee_08__bus--gallery-min-3840w.jpeg',]
                },
                {
                    modelName: 'Q-POD',
                    desc: 'Battery Capacity 44.5 kWh / 400 hp / 195 mi range',
                    id: 3,
                    className: 'q-pod-bus',
                    galleryBtnImg: "https://i.pinimg.com/736x/ec/8a/f8/ec8af8484c53e51023fa216c470f69cd.jpg",
                    galleryBanner: miniBus,
                    exterior: ['https://imageio.forbes.com/specials-images/imageserve/605155aba5bc3e9ed3a5fc4f/Arrival-North-Carolina-Micro-factory/0x0.jpg?format=jpg&width=960',
                        'https://public.das.arrival.com/processed/47dbd3c8-fe22-45ac-9275-51f758ae1db0_01__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/ce0b0bae-f3b1-4d5d-8e16-d95ad653d818_02__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/d664cffe-3add-454f-adf2-f082346c3b33_03__bus--gallery-min-1920w.jpeg',],
                    interior: ['https://public.das.arrival.com/processed/8727cc2f-fd84-45c9-bf66-b340ef8eefc7_04__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/58d11bb4-6e87-408c-ae97-3c572ab4c0c1_05__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/2c098e10-b468-4b1c-8393-da8b9df67aae_06__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/eb4579fc-da8a-40fc-8177-ff755ffd26ae_07__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/f275b0a8-bf7a-4f6e-aea4-816e4c2066ee_08__bus--gallery-min-3840w.jpeg',]
                },
            ]
        },
        {
            name: 'rideshare',
            galleryBanner: bus,
            productImg: 'https://s3files.core77.com/blog/images/1225946_81_111186_owtJUwS8x.jpg',
            models: [
                {
                    modelName: 'Riida X',
                    desc: 'Battery Capacity 44.5 kWh / 400 hp / 195 mi range',
                    id: 4,
                    className: 'riida-x',
                    galleryBtnImg: "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmlkZXNoYXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                    galleryBanner: miniBus,
                    exterior: ['https://imageio.forbes.com/specials-images/imageserve/605155aba5bc3e9ed3a5fc4f/Arrival-North-Carolina-Micro-factory/0x0.jpg?format=jpg&width=960',
                        'https://public.das.arrival.com/processed/47dbd3c8-fe22-45ac-9275-51f758ae1db0_01__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/ce0b0bae-f3b1-4d5d-8e16-d95ad653d818_02__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/d664cffe-3add-454f-adf2-f082346c3b33_03__bus--gallery-min-1920w.jpeg',],
                    interior: ['https://public.das.arrival.com/processed/8727cc2f-fd84-45c9-bf66-b340ef8eefc7_04__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/58d11bb4-6e87-408c-ae97-3c572ab4c0c1_05__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/2c098e10-b468-4b1c-8393-da8b9df67aae_06__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/eb4579fc-da8a-40fc-8177-ff755ffd26ae_07__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/f275b0a8-bf7a-4f6e-aea4-816e4c2066ee_08__bus--gallery-min-3840w.jpeg',]
                },
                {
                    modelName: 'Riida XL',
                    desc: 'Battery Capacity 44.5 kWh / 400 hp / 195 mi range',
                    id: 5,
                    className: 'riida-xl',
                    galleryBtnImg: "https://www.insidehook.com/wp-content/uploads/2019/06/33580290115_e16e9877e9_k.jpg?fit=1067%2C800",
                    galleryBanner: miniBus,
                    exterior: ['https://imageio.forbes.com/specials-images/imageserve/605155aba5bc3e9ed3a5fc4f/Arrival-North-Carolina-Micro-factory/0x0.jpg?format=jpg&width=960',
                        'https://public.das.arrival.com/processed/47dbd3c8-fe22-45ac-9275-51f758ae1db0_01__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/ce0b0bae-f3b1-4d5d-8e16-d95ad653d818_02__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/d664cffe-3add-454f-adf2-f082346c3b33_03__bus--gallery-min-1920w.jpeg',],
                    interior: ['https://public.das.arrival.com/processed/8727cc2f-fd84-45c9-bf66-b340ef8eefc7_04__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/58d11bb4-6e87-408c-ae97-3c572ab4c0c1_05__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/2c098e10-b468-4b1c-8393-da8b9df67aae_06__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/eb4579fc-da8a-40fc-8177-ff755ffd26ae_07__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/f275b0a8-bf7a-4f6e-aea4-816e4c2066ee_08__bus--gallery-min-3840w.jpeg',]
                },
                {
                    modelName: 'Q-Keke X',
                    desc: 'Battery Capacity 44.5 kWh / 400 hp / 195 mi range',
                    id: 6,
                    className: 'q-keke-x',
                    galleryBtnImg: "https://static01.nyt.com/images/2019/07/17/opinion/17hafizWeb/merlin_150966993_105277db-8a47-48fd-8528-dc81e17d4044-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
                    galleryBanner: miniBus,
                    exterior: ['https://imageio.forbes.com/specials-images/imageserve/605155aba5bc3e9ed3a5fc4f/Arrival-North-Carolina-Micro-factory/0x0.jpg?format=jpg&width=960',
                        'https://public.das.arrival.com/processed/47dbd3c8-fe22-45ac-9275-51f758ae1db0_01__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/ce0b0bae-f3b1-4d5d-8e16-d95ad653d818_02__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/d664cffe-3add-454f-adf2-f082346c3b33_03__bus--gallery-min-1920w.jpeg',],
                    interior: ['https://public.das.arrival.com/processed/8727cc2f-fd84-45c9-bf66-b340ef8eefc7_04__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/58d11bb4-6e87-408c-ae97-3c572ab4c0c1_05__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/2c098e10-b468-4b1c-8393-da8b9df67aae_06__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/eb4579fc-da8a-40fc-8177-ff755ffd26ae_07__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/f275b0a8-bf7a-4f6e-aea4-816e4c2066ee_08__bus--gallery-min-3840w.jpeg',]
                },
                {
                    modelName: 'Q-Keke XL',
                    desc: 'Battery Capacity 44.5 kWh / 400 hp / 195 mi range',
                    id: 7,
                    className: 'q-keke-xl',
                    galleryBtnImg: "https://www.motorbiscuit.com/wp-content/uploads/2022/03/elantra-hybrid-uber-lyft-car.jpg",
                    galleryBanner: miniBus,
                    exterior: ['https://imageio.forbes.com/specials-images/imageserve/605155aba5bc3e9ed3a5fc4f/Arrival-North-Carolina-Micro-factory/0x0.jpg?format=jpg&width=960',
                        'https://public.das.arrival.com/processed/47dbd3c8-fe22-45ac-9275-51f758ae1db0_01__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/ce0b0bae-f3b1-4d5d-8e16-d95ad653d818_02__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/d664cffe-3add-454f-adf2-f082346c3b33_03__bus--gallery-min-1920w.jpeg',],
                    interior: ['https://public.das.arrival.com/processed/8727cc2f-fd84-45c9-bf66-b340ef8eefc7_04__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/58d11bb4-6e87-408c-ae97-3c572ab4c0c1_05__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/2c098e10-b468-4b1c-8393-da8b9df67aae_06__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/eb4579fc-da8a-40fc-8177-ff755ffd26ae_07__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/f275b0a8-bf7a-4f6e-aea4-816e4c2066ee_08__bus--gallery-min-3840w.jpeg',]
                },
            ]
        },
        {
            name: 'luxury',
            galleryBanner: bus,
            productImg: 'https://www.globalbrandsmagazine.com/wp-content/uploads/2021/02/rolls-royce-cullinan-in-detail-hero-d.jpg',
            models: [
                {
                    modelName: 'Qwikio Sivian',
                    desc: 'Battery Capacity 44.5 kWh / 400 hp / 195 mi range',
                    id: 8,
                    className: 'qwikio-sivian',
                    galleryBtnImg: 'https://i.insider.com/5ef4fe145af6cc651e2e1977?width=750&format=jpeg&auto=webp',
                    galleryBanner: miniBus,
                    exterior: ['https://imageio.forbes.com/specials-images/imageserve/605155aba5bc3e9ed3a5fc4f/Arrival-North-Carolina-Micro-factory/0x0.jpg?format=jpg&width=960',
                        'https://public.das.arrival.com/processed/47dbd3c8-fe22-45ac-9275-51f758ae1db0_01__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/ce0b0bae-f3b1-4d5d-8e16-d95ad653d818_02__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/d664cffe-3add-454f-adf2-f082346c3b33_03__bus--gallery-min-1920w.jpeg',],
                    interior: ['https://public.das.arrival.com/processed/8727cc2f-fd84-45c9-bf66-b340ef8eefc7_04__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/58d11bb4-6e87-408c-ae97-3c572ab4c0c1_05__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/2c098e10-b468-4b1c-8393-da8b9df67aae_06__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/eb4579fc-da8a-40fc-8177-ff755ffd26ae_07__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/f275b0a8-bf7a-4f6e-aea4-816e4c2066ee_08__bus--gallery-min-3840w.jpeg',]
                },
                {
                    modelName: 'Qwikio Pride',
                    desc: 'Battery Capacity 66.5 kWh / 550 hp / 275 mi range',
                    id: 9,
                    className: 'qwikio-pride',
                    galleryBtnImg: "https://i.pinimg.com/736x/3b/a0/3e/3ba03ec805cddfe10e1f0e8db8b6d28b.jpg",
                    galleryBanner: miniBus,
                    exterior: ['https://imageio.forbes.com/specials-images/imageserve/605155aba5bc3e9ed3a5fc4f/Arrival-North-Carolina-Micro-factory/0x0.jpg?format=jpg&width=960',
                        'https://public.das.arrival.com/processed/47dbd3c8-fe22-45ac-9275-51f758ae1db0_01__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/ce0b0bae-f3b1-4d5d-8e16-d95ad653d818_02__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/d664cffe-3add-454f-adf2-f082346c3b33_03__bus--gallery-min-1920w.jpeg',],
                    interior: ['https://public.das.arrival.com/processed/8727cc2f-fd84-45c9-bf66-b340ef8eefc7_04__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/58d11bb4-6e87-408c-ae97-3c572ab4c0c1_05__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/2c098e10-b468-4b1c-8393-da8b9df67aae_06__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/eb4579fc-da8a-40fc-8177-ff755ffd26ae_07__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/f275b0a8-bf7a-4f6e-aea4-816e4c2066ee_08__bus--gallery-min-3840w.jpeg',]
                },
            ]
        },
        {
            name: 'speciality',
            galleryBanner: bus,
            productImg: 'https://dutchreview.com/wp-content/uploads/Netherlands-police-van-at-night-.jpg',
            models: [
                {
                    modelName: 'Qwikio Police Van',
                    desc: 'Battery Capacity 44.5 kWh / 400 hp / 195 mi range',
                    id: 10,
                    className: 'qwikio-police-van',
                    galleryBtnImg: "https://i.pinimg.com/originals/97/0b/a6/970ba6aabcd05fd69388f936bc0e5409.jpg",
                    galleryBanner: miniBus,
                    exterior: ['https://imageio.forbes.com/specials-images/imageserve/605155aba5bc3e9ed3a5fc4f/Arrival-North-Carolina-Micro-factory/0x0.jpg?format=jpg&width=960',
                        'https://public.das.arrival.com/processed/47dbd3c8-fe22-45ac-9275-51f758ae1db0_01__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/ce0b0bae-f3b1-4d5d-8e16-d95ad653d818_02__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/d664cffe-3add-454f-adf2-f082346c3b33_03__bus--gallery-min-1920w.jpeg',],
                    interior: ['https://public.das.arrival.com/processed/8727cc2f-fd84-45c9-bf66-b340ef8eefc7_04__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/58d11bb4-6e87-408c-ae97-3c572ab4c0c1_05__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/2c098e10-b468-4b1c-8393-da8b9df67aae_06__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/eb4579fc-da8a-40fc-8177-ff755ffd26ae_07__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/f275b0a8-bf7a-4f6e-aea4-816e4c2066ee_08__bus--gallery-min-3840w.jpeg',]
                },
                {
                    modelName: 'Qwikio Ambulance',
                    desc: 'Battery Capacity 66.5 kWh / 550 hp / 275 mi range',
                    id: 11,
                    className: 'qwikio-ambulance',
                    galleryBtnImg: "https://media.istockphoto.com/photos/ambulance-interior-details-picture-id1014130104?k=20&m=1014130104&s=612x612&w=0&h=8EBJXb2aqKPD594FstxPLy2w3-bFdaFMzaH8JlOQYCU=",
                    galleryBanner: miniBus,
                    exterior: ['https://imageio.forbes.com/specials-images/imageserve/605155aba5bc3e9ed3a5fc4f/Arrival-North-Carolina-Micro-factory/0x0.jpg?format=jpg&width=960',
                        'https://public.das.arrival.com/processed/47dbd3c8-fe22-45ac-9275-51f758ae1db0_01__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/ce0b0bae-f3b1-4d5d-8e16-d95ad653d818_02__bus--gallery-min-1920w.jpeg',
                        'https://public.das.arrival.com/processed/d664cffe-3add-454f-adf2-f082346c3b33_03__bus--gallery-min-1920w.jpeg',],
                    interior: ['https://public.das.arrival.com/processed/8727cc2f-fd84-45c9-bf66-b340ef8eefc7_04__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/58d11bb4-6e87-408c-ae97-3c572ab4c0c1_05__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/2c098e10-b468-4b1c-8393-da8b9df67aae_06__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/eb4579fc-da8a-40fc-8177-ff755ffd26ae_07__bus--gallery-min-3840w.jpeg',
                        'https://public.das.arrival.com/processed/f275b0a8-bf7a-4f6e-aea4-816e4c2066ee_08__bus--gallery-min-3840w.jpeg',]
                },
            ]
        }
    ]

    return [{ data }]
}
