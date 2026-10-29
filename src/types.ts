export interface Product {
  id: string;
  name: string;
  category: 'Infusiones' | 'Despensa' | 'Mieles' | 'Packs';
  description: string;
  detailedDescription: string;
  price: number;
  originalPrice?: number;
  weight: string;
  image: string;
  badge?: string;
  ingredients: string[];
  benefits: string[];
  brewTime?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  attendanceMode: 'presencial' | 'virtual';
  city: string;
  notes?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  city: string;
  quote: string;
  product: string;
  rating: number;
  verified: boolean;
}

export const NATIVA_PRODUCTS: Product[] = [
  {
    id: 'te-vital',
    name: 'Té Vital',
    category: 'Infusiones',
    description: 'Mezcla natural de hierbas aromáticas para comenzar el día con energía y bienestar.',
    detailedDescription: 'Una sinergia botánica elaborada a mano con limoncillo silvestre, menta de páramo, jengibre andino y flores de caléndula cosechadas en su punto óptimo. Diseñada para despertar tus sentidos con una energía limpia, digestión ligera y sin cafeína artificial.',
    price: 34900,
    originalPrice: 42000,
    weight: '70 g · Rinde 35 tazas',
    image: '/src/assets/images/nativa_te_vital_1792677715561.jpg',
    badge: 'Producto Estrella',
    ingredients: ['Limoncillo silvestre', 'Menta orgánica', 'Jengibre andino', 'Flor de caléndula'],
    benefits: ['Energía natural limpia sin taquicardia', 'Favorece una digestión equilibrada', 'Alta concentración de polifenoles antioxidantes'],
    brewTime: '4 - 5 min a 90°C'
  },
  {
    id: 'granola-nativa',
    name: 'Granola Nativa',
    category: 'Despensa',
    description: 'Granola artesanal con frutos secos seleccionados, tostada a fuego lento con miel pura.',
    detailedDescription: 'Elaborada artesanalmente en pequeños lotes con avena integral en hojuela entera, almendras tostadas, nueces del bosque, semillas de calabaza y chía. Horneada lentamente con un hilo de miel cruda andina para lograr un crujido inigualable sin aditivos ni preservantes.',
    price: 29500,
    originalPrice: 35000,
    weight: '350 g · Bolsa con cierre zip',
    image: '/src/assets/images/nativa_granola_1792677715345.jpg',
    ingredients: ['Avena integral', 'Almendras enteras', 'Nuez de nogal', 'Semillas de chía y calabaza', 'Miel pura de montaña'],
    benefits: ['Fuente prebiótica rica en fibra natural', 'Aporte prolongado de energía sin picos de azúcar', '100% libre de azúcares refinadas y aceites de palma']
  },
  {
    id: 'miel-de-montana',
    name: 'Miel de Montaña',
    category: 'Mieles',
    description: 'Miel natural de producción local cosechada con respeto en bosques de niebla.',
    detailedDescription: 'Miel cruda de alta montaña, proveniente del néctar de flora silvestre nativa de la cordillera. Cosechada por apicultores guardianes de abejas mediante prácticas éticas y regenerativas. No es sometida a calor ni microfiltrado, conservando todo su polen vivo.',
    price: 38000,
    originalPrice: 45000,
    weight: '320 g · Tarro de vidrio ámbar',
    image: '/src/assets/images/nativa_miel_montana_1792677716087.jpg',
    badge: 'Cosecha Limitada',
    ingredients: ['100% Miel Cruda de Abejas de Bosque Nativo'],
    benefits: ['Propiedades antisépticas y regeneradoras', 'Refuerzo de defensas naturales', 'Sabor floral profundo con notas amaderadas']
  },
  {
    id: 'infusion-relax',
    name: 'Infusión Relax',
    category: 'Infusiones',
    description: 'Mezcla de plantas aromáticas para una relajación profunda y sueño reparador.',
    detailedDescription: 'Fórmula creada para desconectar de la prisa y devolverle la calma al cuerpo al terminar la jornada. Reúne flores enteras de manzanilla silvestre, capullos de lavanda de altura, hojas de toronjil y pasiflora aromática.',
    price: 32000,
    originalPrice: 38000,
    weight: '60 g · Rinde 30 tazas',
    image: '/src/assets/images/nativa_infusion_relax_1792677715683.jpg',
    ingredients: ['Flor de manzanilla', 'Capullos de lavanda', 'Hojas de toronjil', 'Pasiflora nativa'],
    benefits: ['Promueve el descanso profundo sin somnolencia química', 'Alivia la tensión muscular y la fatiga mental', 'Aromaterapia botánica reconfortante'],
    brewTime: '6 - 8 min a 95°C'
  },
  {
    id: 'pack-lanzamiento-ritual',
    name: 'Kit Ritual Nativa (Edición Especial)',
    category: 'Packs',
    description: 'La experiencia completa de lanzamiento: Té Vital + Granola + Miel + Cuchara botánica de madera.',
    detailedDescription: 'La combinación definitiva para renovar tus mañanas. Incluye el tarro completo de Té Vital, bolsa de Granola Nativa, frasco de Miel de Montaña, cuchara medidora de madera de guayacán recuperada y libreta de notas con rituales de bienestar.',
    price: 89000,
    originalPrice: 115000,
    weight: 'Caja coleccionable artesanal',
    image: '/src/assets/images/nativa_hero_botanical_1792677714429.jpg',
    badge: 'Ahorro 25% · Lanzamiento',
    ingredients: ['Té Vital 70g', 'Granola Nativa 350g', 'Miel de Montaña 320g', 'Cuchara artesanal'],
    benefits: ['Ahorras $26.000 vs comprar por separado', 'Incluye pase VIP prioritario al evento virtual', 'Envío gratis a ciudades principales']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    author: 'Camila Restrepo',
    role: 'Arquitecta y practicante de yoga',
    city: 'Medellín',
    quote: 'Cambiar el café agresivo de la mañana por el Té Vital transformó por completo mi nivel de energía. No me da taquicardia y mi digestión es otra. Además el empaque se siente como una obra de arte.',
    product: 'Té Vital',
    rating: 5,
    verified: true
  },
  {
    id: '2',
    author: 'Andrés Felipe Morales',
    role: 'Chef e investigador gastronómico',
    city: 'Bogotá',
    quote: 'La Miel de Montaña tiene una textura y notas florales que solo consigues cuando se respeta el panal y la temporada. NATIVA está marcando un estándar altísimo en productos conscientes.',
    product: 'Miel de Montaña',
    rating: 5,
    verified: true
  },
  {
    id: '3',
    author: 'Valeria Jaramillo',
    role: 'Emprendedora sostenible',
    city: 'Cali',
    quote: 'La Granola Nativa con yogur natural y miel es mi desayuno sagrado diario. Se nota la diferencia de los lotes pequeños hechos a mano frente a cualquier producto industrial de supermercado.',
    product: 'Granola Nativa',
    rating: 5,
    verified: true
  }
];

export const BRAND_SERVICES = [
  {
    id: 'cata-sensorial',
    title: 'Catas Botánicas & Sensoriales',
    tag: 'Experiencia Presencial',
    description: 'Sesiones guiadas por botánicos locales para aprender a catar infusiones, identificar hierbas de páramo y maridar con mieles crudas.',
    duration: '90 minutos · Grupos reducidos',
    action: 'AGENDAR'
  },
  {
    id: 'asesoria-bienestar',
    title: 'Consultoría en Hábitos & Nutrición Limpia',
    tag: 'Sesión 1 a 1',
    description: 'Diagnóstico personalizado para reemplazar alimentos ultraprocesados por alternativas artesanales acordes a tu ritmo biológico.',
    duration: '45 minutos · Presencial o Virtual',
    action: 'AGENDAR'
  },
  {
    id: 'nativa-box',
    title: 'Suscripción Cosecha del Mes',
    tag: 'Entrega Recurrente',
    description: 'Recibe en tu puerta cada mes una selección rotativa de mieles de temporada, cosechas frescas de infusiones y granolas recién horneadas con 15% de beneficio.',
    duration: 'Mensual · Cancela cuando desees',
    action: 'SOLICITAR INFORMACIÓN'
  }
];
