import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = signal<Product[]>([

    /* =========================
       HOT BUYS
    ========================= */
    {
      id: 1,
      title: 'Sofá Luxury Edition',
      price: 15999,
      description: 'Sofá premium moderno con descuento especial',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'HOT BUYS',

      color: 'Beige',
      material: 'Tela',
      size: 'Queen Size'
    },
    {
      id: 2,
      title: 'Mesa Centro Moderna',
      price: 5999,
      description: 'Mesa de centro minimalista para sala premium',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'HOT BUYS',

      color: 'Café',
      material: 'Madera',
      size: 'Individual'
    },
    {
      id: 3,
      title: 'Comedor Black Edition',
      price: 18999,
      description: 'Comedor elegante contemporáneo acabado negro mate',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'HOT BUYS',

      color: 'Negro',
      material: 'Metal',
      size: 'King Size'
    },
    {
      id: 4,
      title: 'Colchón Premium Dream',
      price: 12999,
      description: 'Colchón ortopédico premium memory foam',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'HOT BUYS',

      color: 'Blanco',
      material: 'Tela',
      size: 'Queen Size'
    },
    /* =========================
       SALA
    ========================= */
    {
      id: 1,
      title: 'Sofá Escandinavo Beige',
      price: 18999,
      description: 'Sofá moderno de lino premium estilo escandinavo',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'SALA',

      color: 'Beige',
      material: 'Tela',
      size: 'Queen Size'
    },
    {
      id: 2,
      title: 'Sala Modular Contemporánea',
      price: 25999,
      description: 'Sala modular elegante color crema premium',
      image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'SALA',

      color: 'Blanco',
      material: 'Tela',
      size: 'King Size'
    },
    {
      id: 5,
      title: 'Sofá Luxury Gray',
      price: 20999,
      description: 'Sofá contemporáneo premium color gris oscuro',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'SALA',

      color: 'Gris',
      material: 'Tela',
      size: 'King Size'
    },
    {
      id: 6,
      title: 'Sala Minimal Black',
      price: 27999,
      description: 'Sala minimalista moderna acabado negro mate',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'SALA',

      color: 'Negro',
      material: 'Piel',
      size: 'King Size'
    },
    {
      id: 7,
      title: 'Love Seat Moderno',
      price: 11999,
      description: 'Love seat compacto moderno color arena',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'SALA',

      color: 'Café',
      material: 'Tela',
      size: 'Matrimonial'
    },
    {
      id: 8,
      title: 'Sillón Individual Premium',
      price: 6999,
      description: 'Sillón individual elegante estilo minimalista',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'SALA',

      color: 'Azul',
      material: 'Tela',
      size: 'Individual'
    },

    /* =========================
       COMEDOR
    ========================= */
    {
      id: 3,
      title: 'Mesa Comedor Minimalista',
      price: 14500,
      description: 'Mesa de comedor moderna acabado madera natural',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      category: 'COMEDOR',

      color: 'Café',
      material: 'Madera',
      size: 'Matrimonial'
    },
    {
      id: 4,
      title: 'Comedor Industrial Premium',
      price: 21999,
      description: 'Comedor industrial moderno con acabados metálicos',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      category: 'COMEDOR',

      color: 'Negro',
      material: 'Metal',
      size: 'King Size'
    },
    {
      id: 9,
      title: 'Comedor Escandinavo Light',
      price: 18500,
      description: 'Comedor elegante estilo escandinavo color claro',
      image: 'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      category: 'COMEDOR',

      color: 'Blanco',
      material: 'Madera',
      size: 'Queen Size'
    },
    {
      id: 10,
      title: 'Comedor Contemporáneo Gray',
      price: 23999,
      description: 'Comedor contemporáneo premium color gris oscuro',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      category: 'COMEDOR',

      color: 'Gris',
      material: 'Cristal',
      size: 'King Size'
    },
    {
      id: 11,
      title: 'Mesa Circular Moderna',
      price: 15999,
      description: 'Mesa circular elegante para comedor moderno',
      image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      category: 'COMEDOR',

      color: 'Azul',
      material: 'Cristal',
      size: 'Queen Size'
    },
    {
      id: 12,
      title: 'Comedor 6 Sillas Deluxe',
      price: 26999,
      description: 'Comedor premium de 6 sillas acabado nogal',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      category: 'COMEDOR',

      color: 'Café',
      material: 'Madera',
      size: 'King Size'
    },

    /* =========================
      RECÁMARA
   ========================= */
    {
      id: 5,
      title: 'Recámara King Size Luxury',
      price: 32999,
      description: 'Recámara moderna tapizada premium color beige',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      category: 'RECÁMARA',

      color: 'Beige',
      material: 'Tela',
      size: 'King Size'
    },
    {
      id: 6,
      title: 'Cama Moderna Minimalista',
      price: 17999,
      description: 'Cama matrimonial elegante acabado nogal',

      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',

      banner: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',

      category: 'RECÁMARA',

      color: 'Café',
      material: 'Madera',
      size: 'Matrimonial'
    },
    {
      id: 13,
      title: 'Recámara Premium White',
      price: 28999,
      description: 'Recámara contemporánea color blanco mate',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      category: 'RECÁMARA',

      color: 'Blanco',
      material: 'Madera',
      size: 'Queen Size'
    },
    {
      id: 14,
      title: 'Cama Escandinava Deluxe',
      price: 19999,
      description: 'Cama moderna estilo escandinavo premium',
      image: 'https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      category: 'RECÁMARA',

      color: 'Gris',
      material: 'Tela',
      size: 'Queen Size'
    },
    {
      id: 15,
      title: 'Buró Minimalista Nogal',
      price: 3499,
      description: 'Buró moderno acabado nogal premium',
      image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      category: 'RECÁMARA',

      color: 'Café',
      material: 'Madera',
      size: 'Individual'
    },
    {
      id: 16,
      title: 'Closet Moderno Elite',
      price: 18999,
      description: 'Closet amplio moderno acabado madera premium',
      image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      category: 'RECÁMARA',

      color: 'Blanco',
      material: 'Madera',
      size: 'King Size'
    },

    /* =========================
   OFICINA
========================= */
    {
      id: 7,
      title: 'Escritorio Ejecutivo',
      price: 8999,
      description: 'Escritorio moderno para oficina',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      banner: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      category: 'OFICINA',

      /* NUEVO */
      color: 'Gris',
      material: 'Madera',
      size: 'Matrimonial'
    },
    {
      id: 8,
      title: 'Silla Ergonómica Pro',
      price: 5999,
      description: 'Silla ergonómica premium negra',
      image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455',
      banner: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      category: 'OFICINA',

      /* NUEVO */
      color: 'Negro',
      material: 'Tela',
      size: 'Individual'
    },

    {
      id: 29,
      title: 'Librero Corporativo Elite',
      price: 12999,
      description: 'Librero elegante para oficina ejecutiva',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      category: 'OFICINA',

      /* NUEVO */
      color: 'Café',
      material: 'Madera',
      size: 'Queen Size'
    },
    {
      id: 30,
      title: 'Escritorio Minimal Black',
      price: 14999,
      description: 'Escritorio minimalista acabado negro mate',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      category: 'OFICINA',

      /* NUEVO */
      color: 'Negro',
      material: 'Metal',
      size: 'King Size'
    },
    {
      id: 31,
      title: 'Silla Ejecutiva Luxury',
      price: 7999,
      description: 'Silla ejecutiva ergonómica de lujo',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      category: 'OFICINA',

      /* NUEVO */
      color: 'Azul',
      material: 'Tela',
      size: 'Individual'
    },
    {
      id: 32,
      title: 'Mesa de Juntas Moderna',
      price: 21999,
      description: 'Mesa amplia para salas de juntas premium',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      category: 'OFICINA',

      /* NUEVO */
      color: 'Blanco',
      material: 'Cristal',
      size: 'King Size'
    },
    /* =========================
       SMALL SPACES
    ========================= */
    {
      id: 9,
      title: 'Sillón Compacto Moderno',
      price: 4999,
      description: 'Sillón moderno ideal para espacios pequeños',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      category: 'SMALL SPACES',

      color: 'Gris',
      material: 'Tela',
      size: 'Individual'
    },
    {
      id: 10,
      title: 'Mesa Lateral Minimalista',
      price: 2499,
      description: 'Mesa lateral compacta perfecta para departamentos',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      category: 'SMALL SPACES',

      color: 'Blanco',
      material: 'Madera',
      size: 'Individual'
    },

    /* =========================
     COLCHONES
  ========================= */
    {
      id: 11,
      title: 'Colchón King Premium',
      price: 13999,
      description: 'Colchón premium memory foam king size',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      category: 'COLCHONES',

      color: 'Blanco',
      material: 'Tela',
      size: 'King Size'
    },
    {
      id: 12,
      title: 'Colchón Ortopédico Deluxe',
      price: 10999,
      description: 'Máximo confort ortopédico y soporte lumbar',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      category: 'COLCHONES',

      color: 'Gris',
      material: 'Tela',
      size: 'Queen Size'
    },
    {
      id: 25,
      title: 'Colchón Memory Elite',
      price: 13999,
      description: 'Colchón memory foam premium ultra confort',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      category: 'COLCHONES',

      color: 'Azul',
      material: 'Tela',
      size: 'Queen Size'
    },
    {
      id: 26,
      title: 'Colchón Comfort Black',
      price: 10999,
      description: 'Colchón ergonómico premium acabado black edition',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      category: 'COLCHONES',

      color: 'Negro',
      material: 'Tela',
      size: 'Matrimonial'
    },
    {
      id: 27,
      title: 'Colchón Queen Memory',
      price: 12499,
      description: 'Memory foam ultra confort queen size',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      category: 'COLCHONES',

      color: 'Beige',
      material: 'Tela',
      size: 'Queen Size'
    },
    {
      id: 28,
      title: 'Base y Colchón Deluxe',
      price: 21999,
      description: 'Set completo premium con base matrimonial',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      category: 'COLCHONES',

      color: 'Café',
      material: 'Tela',
      size: 'King Size'
    },

    /* =========================
   DISEÑADORES
========================= */
    {
      id: 33,
      title: 'Sofá Designer Milano',
      price: 28999,
      description: 'Sofá italiano premium diseñado para interiores modernos',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'DISEÑADORES',

      color: 'Gris',
      material: 'Tela',
      size: 'King Size'
    },
    {
      id: 34,
      title: 'Mesa Luxury Marble',
      price: 35999,
      description: 'Mesa de diseñador con acabado mármol premium',
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'DISEÑADORES',

      color: 'Blanco',
      material: 'Cristal',
      size: 'Queen Size'
    },
    {
      id: 35,
      title: 'Sillón Velvet Gold',
      price: 18999,
      description: 'Sillón contemporáneo acabado velvet de lujo',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'DISEÑADORES',

      color: 'Azul',
      material: 'Tela',
      size: 'Individual'
    },
    {
      id: 36,
      title: 'Comedor Signature Black',
      price: 42999,
      description: 'Comedor exclusivo estilo europeo moderno',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'DISEÑADORES',

      color: 'Café',
      material: 'Madera',
      size: 'King Size'
    },
    {
      id: 37,
      title: 'Recámara Royal Edition',
      price: 49999,
      description: 'Recámara premium diseñada para interiores elegantes',

      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',

      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',

      category: 'DISEÑADORES',

      color: 'Gris',
      material: 'Piel',
      size: 'King Size'
    },
    {
      id: 38,
      title: 'Escritorio Designer Pro',
      price: 23999,
      description: 'Escritorio ejecutivo de diseñador acabado negro mate',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'DISEÑADORES',

      color: 'Negro',
      material: 'Metal',
      size: 'Matrimonial'
    },

    /* =========================
   BUSINESS
========================= */
    {
      id: 39,
      title: 'Sala Ejecutiva Corporate',
      price: 45999,
      description: 'Sala premium ideal para recepciones corporativas',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
      category: 'BUSINESS',

      color: 'Gris',
      material: 'Tela',
      size: 'King Size'
    },
    {
      id: 40,
      title: 'Escritorio Empresarial Black',
      price: 18999,
      description: 'Escritorio moderno para oficinas ejecutivas',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
      category: 'BUSINESS',

      color: 'Negro',
      material: 'Madera',
      size: 'Matrimonial'
    },
    {
      id: 41,
      title: 'Silla Corporativa Elite',
      price: 8999,
      description: 'Silla ergonómica premium para oficina',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
      category: 'BUSINESS',

      color: 'Azul',
      material: 'Piel',
      size: 'Individual'
    },
    {
      id: 42,
      title: 'Mesa de Juntas Prestige',
      price: 52999,
      description: 'Mesa de juntas elegante para corporativos',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
      category: 'BUSINESS',

      color: 'Café',
      material: 'Cristal',
      size: 'King Size'
    },
    {
      id: 43,
      title: 'Recepción Minimal Pro',
      price: 26999,
      description: 'Mostrador minimalista para oficinas modernas',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
      category: 'BUSINESS',

      color: 'Blanco',
      material: 'Metal',
      size: 'Queen Size'
    },
    {
      id: 44,
      title: 'Librero Ejecutivo Modern',
      price: 14999,
      description: 'Librero corporativo elegante acabado nogal',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
      category: 'BUSINESS',

      color: 'Café',
      material: 'Madera',
      size: 'Matrimonial'
    },

    /* =========================
   ACCESORIOS
========================= */
    {
      id: 45,
      title: 'Lámpara Minimal Gold',
      price: 3499,
      description: 'Lámpara decorativa moderna acabado dorado',
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'ACCESORIOS',

      color: 'Blanco',
      material: 'Metal',
      size: 'Individual'
    },
    {
      id: 46,
      title: 'Espejo Luxury Wall',
      price: 5999,
      description: 'Espejo decorativo premium estilo contemporáneo',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'ACCESORIOS',

      color: 'Gris',
      material: 'Cristal',
      size: 'Queen Size'
    },
    {
      id: 47,
      title: 'Jarrón Nordic Style',
      price: 2499,
      description: 'Jarrón minimalista para interiores modernos',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'ACCESORIOS',

      color: 'Café',
      material: 'Madera',
      size: 'Individual'
    },
    {
      id: 48,
      title: 'Reloj Decorativo Premium',
      price: 4299,
      description: 'Reloj elegante para sala y oficina',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'ACCESORIOS',

      color: 'Negro',
      material: 'Metal',
      size: 'Matrimonial'
    },
    {
      id: 49,
      title: 'Tapete Modern Living',
      price: 7999,
      description: 'Tapete premium suave para interiores elegantes',
      image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'ACCESORIOS',

      color: 'Azul',
      material: 'Tela',
      size: 'King Size'
    },
    {
      id: 50,
      title: 'Cuadro Abstract Premium',
      price: 6999,
      description: 'Arte decorativo moderno para interiores',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'ACCESORIOS',

      color: 'Blanco',
      material: 'Tela',
      size: 'Queen Size'
    },
    /* =========================
   EXTERIOR
========================= */
    {
      id: 51,
      title: 'Sala Garden Luxury',
      price: 28999,
      description: 'Sala exterior premium para terrazas y jardines',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      category: 'EXTERIOR',

      color: 'Gris',
      material: 'Tela',
      size: 'King Size'
    },
    {
      id: 52,
      title: 'Comedor Outdoor Elite',
      price: 35999,
      description: 'Comedor elegante resistente para exteriores',
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      category: 'EXTERIOR',

      color: 'Café',
      material: 'Madera',
      size: 'Queen Size'
    },
    {
      id: 53,
      title: 'Camastro Pool Deluxe',
      price: 14999,
      description: 'Camastro moderno ideal para alberca y jardín',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      category: 'EXTERIOR',

      color: 'Blanco',
      material: 'Tela',
      size: 'Individual'
    },
    {
      id: 54,
      title: 'Mesa Terraza Moderna',
      price: 9999,
      description: 'Mesa exterior minimalista para balcones y patios',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      category: 'EXTERIOR',

      color: 'Negro',
      material: 'Metal',
      size: 'Matrimonial'
    },
    {
      id: 55,
      title: 'Sillón Exterior Relax',
      price: 7999,
      description: 'Sillón cómodo resistente al clima',
      image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      category: 'EXTERIOR',

      color: 'Azul',
      material: 'Piel',
      size: 'Individual'
    },
    {
      id: 56,
      title: 'Pergola Premium Outdoor',
      price: 55999,
      description: 'Pergola elegante para jardines y rooftops',
      image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      category: 'EXTERIOR',

      color: 'Café',
      material: 'Madera',
      size: 'King Size'
    },

    /* =========================
   FAVORITOS
========================= */
    {
      id: 57,
      title: 'Sofá Velvet Premium',
      price: 24999,
      description: 'Sofá contemporáneo acabado velvet premium',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'FAVORITOS',

      color: 'Gris',
      material: 'Tela',
      size: 'King Size'
    },
    {
      id: 58,
      title: 'Comedor Signature White',
      price: 32999,
      description: 'Comedor elegante premium para interiores modernos',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'FAVORITOS',

      color: 'Blanco',
      material: 'Cristal',
      size: 'Queen Size'
    },
    {
      id: 59,
      title: 'Recámara Black Edition',
      price: 45999,
      description: 'Recámara moderna premium acabado negro mate',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'FAVORITOS',

      color: 'Negro',
      material: 'Madera',
      size: 'King Size'
    },
    {
      id: 60,
      title: 'Sillón Luxury Nordic',
      price: 8999,
      description: 'Sillón minimalista premium estilo nórdico',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'FAVORITOS',

      color: 'Azul',
      material: 'Tela',
      size: 'Individual'
    },
    {
      id: 61,
      title: 'Mesa Luxury Marble',
      price: 18999,
      description: 'Mesa moderna acabado mármol premium',
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'FAVORITOS',

      color: 'Blanco',
      material: 'Cristal',
      size: 'Matrimonial'
    },
    {
      id: 62,
      title: 'Librero Elite Modern',
      price: 11999,
      description: 'Librero elegante contemporáneo premium',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'FAVORITOS',

      color: 'Café',
      material: 'Madera',
      size: 'Queen Size'
    },
    {
      id: 63,
      title: 'Cama Premium Soft',
      price: 27999,
      description: 'Cama moderna tapizada ultra confort',
      image: 'https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'FAVORITOS',

      color: 'Beige',
      material: 'Tela',
      size: 'Queen Size'
    },
    {
      id: 64,
      title: 'Sala Modular Premium',
      price: 38999,
      description: 'Sala modular elegante para interiores exclusivos',
      image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      banner: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
      category: 'FAVORITOS',

      color: 'Gris',
      material: 'Tela',
      size: 'King Size'
    },

  ]);

  getProducts() {
    return this.products;
  }

  getProductsByCategory(category: string) {

    return this.products().filter(product => {

      return product.category
        .toLowerCase()
        .replace(/\s+/g, '-')
        === category;

    });

  }

  getProductById(id: number) {

    return this.products()
      .find(p => p.id === id);

  }

}