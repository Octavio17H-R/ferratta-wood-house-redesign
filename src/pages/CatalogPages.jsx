import React, { useMemo, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { categories, collections, categoryBySlug, collectionBySlug, products } from '../data/catalog.js'
import { Breadcrumbs, Eyebrow, Reveal, ArrowLink, ButtonLink, SectionHeading, EmptyMedia, ImagePanel } from '../components/UI.jsx'
import Icon from '../components/Icon.jsx'
import { assetUrl } from '../utils/assets.js'

export function CatalogPage({ onQuote }) {
  return <main className="page-main">
    <section className="page-hero page-hero-compact"><div><Eyebrow>El universo Ferratta</Eyebrow><h1>Materiales que<br/><em>construyen carácter.</em></h1><p>Explora pisos de madera, superficies laminadas, SPC, vinyl, cortinas y persianas.</p></div><div className="page-hero-side"><span>CATÁLOGO / 2026</span><strong>01—05</strong><small>Encuentra tu material</small></div></section>
    <div className="section-wrap"><Breadcrumbs items={[{label:'Catálogo'}]}/><div className="catalog-category-list">{categories.map((category,index)=><Reveal className="catalog-category-row" key={category.slug} delay={index*.025}><Link to={`/categoria/${category.slug}`} className="catalog-category-link"><div className="catalog-category-number">0{index+1}</div><div className="catalog-category-image">{category.image?<img src={assetUrl(category.image)} alt="" loading="lazy"/>:<EmptyMedia title={category.title}/>}</div><div className="catalog-category-copy"><span>{category.eyebrow}</span><h2>{category.title}</h2><p>{category.description}</p><small>{category.countLabel}</small></div><span className="catalog-category-arrow"><Icon name="diagonal"/></span></Link></Reveal>)}</div></div>
    <section className="page-cta"><div><Eyebrow dark>Asesoría de producto</Eyebrow><h2>¿Tienes un espacio<br/><em>en mente?</em></h2></div><ButtonLink onClick={onQuote} variant="light">Solicitar cotización</ButtonLink></section>
  </main>
}

function CollectionCard({ collection, index }) {
  const category = categoryBySlug[collection.category]
  return <Reveal className="collection-card" delay={(index%4)*.04}><Link to={`/colecciones/${collection.slug}`}><div className={`collection-card-image collection-swatch-${index%5}`}><div className="swatch-texture"/>{(collection.image || collection.gallery?.[0]) && <img src={assetUrl(collection.image || collection.gallery[0])} alt=""/>}<span className="collection-card-num">{String(index+1).padStart(2,'0')}</span><span className="collection-card-arrow"><Icon name="diagonal"/></span>{collection.status!=='Contenido público localizado'&&<small className="status-flag">Por validar</small>}</div><div className="collection-card-copy"><span>{collection.brand || category?.title}</span><h3>{collection.name}</h3><p>{collection.description}</p><div>Explorar ficha <Icon name="arrow" size={14}/></div></div></Link></Reveal>
}

export function CategoryPage({ onQuote }) {
  const { slug } = useParams()
  const category = categoryBySlug[slug]
  const [filter, setFilter] = useState('')
  const items = useMemo(()=>collections.filter((item)=>item.category===slug && `${item.name} ${item.brand} ${item.description}`.toLowerCase().includes(filter.toLowerCase())),[slug,filter])
  if (!category) return <NotFoundInline/>
  return <main className="page-main">
    <section className="category-hero"><div className="category-hero-photo">{category.image?<img src={assetUrl(category.image)} alt=""/>:<div className="category-hero-empty"><span>FERRATTA / MATERIAL ARCHIVE</span></div>}</div><div className="category-hero-content"><Breadcrumbs items={[{label:'Catálogo',to:'/catalogo'},{label:category.title}]}/><Eyebrow>{category.eyebrow}</Eyebrow><h1>{category.title}<br/><em>Ferratta.</em></h1><p>{category.description}</p><div className="category-hero-meta"><span>{category.countLabel}</span><span>Fichas y referencias</span></div></div></section>
    <section className="section-wrap category-content">
      {category.brands?.length>0&&<div className="brand-pills">{category.brands.map((brand)=><button type="button" onClick={() => document.getElementById(brand.slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' })} key={brand.slug}>{brand.name}<Icon name="arrow" size={13}/></button>)}</div>}
      {category.tonalities?.length>0&&<div className="tonality-filter"><span>TONALIDADES PRESENTADAS EN EL CATÁLOGO</span>{category.tonalities.map((tone)=><span className="tonality-chip" key={tone}>{tone}</span>)}</div>}
      <div className="collection-toolbar"><div><Eyebrow>Explora las colecciones</Eyebrow><h2>Encuentra tu <em>acabado.</em></h2></div><label className="catalog-filter"><Icon name="search" size={17}/><input value={filter} onChange={(e)=>setFilter(e.target.value)} placeholder="Buscar colección…" aria-label="Buscar colección"/></label></div>
      {category.brands?.map((brand)=><div className="brand-group" id={brand.slug} key={brand.slug}><div className="brand-group-heading"><span>MARCA / {brand.name.toUpperCase()}</span><p>{brand.description}</p></div><div className="collection-grid">{items.filter((item)=>item.brand===brand.name).map((item,index)=><CollectionCard key={item.slug} collection={item} index={index}/>)}</div></div>)}
      <div className="collection-grid ungrouped">{items.filter((item)=>!category.brands?.some((brand)=>brand.name===item.brand)).map((item,index)=><CollectionCard key={item.slug} collection={item} index={index}/>)}</div>
      {items.length===0&&<div className="empty-state"><h3>No encontramos esa colección.</h3><p>Prueba con otro nombre o explora el catálogo completo.</p><ButtonLink to="/catalogo">Volver al catálogo</ButtonLink></div>}
      {category.pending&&<div className="validation-note"><span>CONTENIDO POR VALIDAR</span><p>La sección está lista para recibir la línea de producto, las fichas técnicas y las imágenes oficiales cuando Ferratta confirme este catálogo.</p><button className="text-link" onClick={onQuote}>Consultar con Ferratta <Icon name="arrow"/></button></div>}
    </section>
  </main>
}

export function CollectionPage({ onQuote }) {
  const { slug } = useParams()
  const collection = collectionBySlug[slug]
  if (!collection) return <NotFoundInline/>
  const category = categoryBySlug[collection.category]
  const models = products.filter((item)=>item.collectionSlug===collection.slug)
  return <main className="page-main">
    <section className="collection-detail-hero"><div className="collection-detail-copy"><Breadcrumbs items={[{label:'Catálogo',to:'/catalogo'},{label:category?.title,to:`/categoria/${collection.category}`},{label:collection.name}]}/><Eyebrow>{collection.brand} · {category?.title}</Eyebrow><h1>{collection.name}<br/><em>por Ferratta.</em></h1><p>{collection.description}</p><div className="collection-detail-actions"><button className="button button-dark" onClick={()=>onQuote(collection.name)}>Solicitar cotización <Icon name="diagonal" size={15}/></button><a href={collection.originalUrl || '#ficha'} className="text-link" target={collection.originalUrl?'_blank':undefined} rel="noreferrer">Ficha original <Icon name="external" size={14}/></a></div><span className="collection-detail-index">COLECCIÓN / {collection.slug.toUpperCase()}</span></div><div className="collection-detail-image"><ImagePanel src={collection.image || collection.gallery?.[0] || (collection.category==='madera'?'/images/ferratta-hero.webp':collection.category==='cortinas'?null:'/images/ferratta-dining.webp')} alt={`Referencia visual de ${collection.name}`} label="Fotografía de referencia" number="F / 01"/></div></section>
    <section className="section-wrap collection-content" id="ficha">
      <div className="collection-description"><Eyebrow>La colección</Eyebrow><h2>La belleza está<br/><em>en los detalles.</em></h2><p>{collection.description}</p>{collection.note&&<div className="editorial-note"><strong>Nota de catálogo</strong><span>{collection.note}</span></div>}</div>
      <div className="collection-specs"><div className="specs-top"><span>Ficha técnica</span><small>{collection.status}</small></div>{collection.specs.length ? collection.specs.map(([label,value])=><div className="spec-row" key={label}><span>{label}</span><strong>{value}</strong></div>) : <div className="spec-empty">Las especificaciones de esta colección se incorporarán aquí a partir de la ficha técnica oficial.</div>}{collection.material&&<div className="spec-row"><span>Material</span><strong>{collection.material}</strong></div>}{collection.finish&&<div className="spec-row"><span>Acabado</span><strong>{collection.finish}</strong></div>}</div>
    </section>
    {models.length>0&&<section className="models-section section-wrap"><div className="models-heading"><SectionHeading eyebrow="Modelos y referencias" title={<>Detalles que hacen<br/><em>cada espacio único.</em></>} text="Los modelos se muestran como referencias del catálogo. Agrega fotografía de tono, muestra y documento técnico en cada ficha."/><span>{String(models.length).padStart(2,'0')} referencias</span></div><div className="models-grid">{models.map((model,index)=><Link className="model-card" to={`/productos/${model.slug}`} key={model.slug}><div className={`model-swatch model-swatch-${index%5}`}><div className="swatch-texture"/><span>{String(index+1).padStart(2,'0')}</span><Icon name="diagonal"/></div><div><span>{collection.name}</span><h3>{model.name}</h3><small>{model.specs || 'Ver información de referencia'}</small></div></Link>)}</div></section>}
    <section className="collection-photo-band"><ImagePanel src={collection.gallery?.[1] || collection.image || (collection.category==='cortinas'?null:'/images/ferratta-hero.webp')} alt="Imagen conceptual de interior" label="Espacio para fotografía de aplicación" number="F / 02"/><div><Eyebrow>En contexto</Eyebrow><h2>Una superficie.<br/><em>Infinitas posibilidades.</em></h2><p>Integra aquí fotografías de ambientes, acercamientos de textura, muestras de color e instalaciones reales.</p><button className="button button-dark" onClick={()=>onQuote(collection.name)}>Solicitar información <Icon name="diagonal" size={14}/></button></div></section>
    <section className="page-cta"><div><Eyebrow dark>Asesoría personalizada</Eyebrow><h2>Elige con confianza.<br/><em>Conoce la colección.</em></h2></div><button className="button button-light" onClick={()=>onQuote(collection.name)}>Cotizar {collection.name} <Icon name="diagonal" size={15}/></button></section>
  </main>
}

export function ProductPage({ onQuote }) {
  const { slug } = useParams()
  const product = products.find((item)=>item.slug===slug)
  if (!product) return <NotFoundInline/>
  const collection = collectionBySlug[product.collectionSlug]
  const category = categoryBySlug[product.category]
  return <main className="page-main">
    <section className="product-detail section-wrap"><Breadcrumbs items={[{label:'Catálogo',to:'/catalogo'},{label:category?.title,to:`/categoria/${product.category}`},{label:collection?.name,to:`/colecciones/${collection?.slug}`},{label:product.name}]}/><div className="product-detail-grid"><div className="product-gallery">{product.image?<ImagePanel src={product.image} alt={product.name} label="Fotografía de producto" number="01"/>:<EmptyMedia title={product.name} subtitle="Fotografía del modelo por cargar" ratio="product"/>}<div className="product-gallery-thumbs">{product.gallery?.length ? product.gallery.slice(0,3).map((src,index)=><ImagePanel key={src} src={src} alt={`${product.name} detalle ${index+1}`} label={`Detalle 0${index+1}`} number={`0${index+1}`}/>) : <><EmptyMedia title="Textura" ratio="thumb"/><EmptyMedia title="Instalación" ratio="thumb"/><EmptyMedia title="Detalle" ratio="thumb"/></>}</div></div><div className="product-info"><Eyebrow>{product.brand} · {collection?.name}</Eyebrow><h1>{product.name}<br/><em>Referencia de colección.</em></h1><p>{product.description}</p><div className="product-info-divider"/><div className="product-spec-list">{product.specs.map(([label,value])=><div className="spec-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><button className="button button-dark button-full" onClick={()=>onQuote(product.name)}>Solicitar cotización <Icon name="diagonal" size={15}/></button><Link to={`/colecciones/${collection?.slug}`} className="text-link">Volver a {collection?.name} <Icon name="arrow" size={14}/></Link><small className="product-legal">No se muestran precios ni inventario en línea. Disponibilidad y especificaciones finales sujetas a confirmación de Ferratta.</small></div></div></section>
    <section className="section-wrap related-products"><Eyebrow>Continúa explorando</Eyebrow><h2>Más de la colección <em>{collection?.name}</em></h2><Link to={`/colecciones/${collection?.slug}`} className="button button-outline">Ver colección completa <Icon name="diagonal" size={14}/></Link></section>
  </main>
}

export function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const results = collections.filter((item)=>`${item.name} ${item.brand} ${item.description}`.toLowerCase().includes(query.toLowerCase()))
  const productResults = products.filter((item)=>`${item.name} ${item.brand} ${item.collectionName}`.toLowerCase().includes(query.toLowerCase()))
  return <main className="page-main section-wrap search-results"><Breadcrumbs items={[{label:'Buscar'}]}/><Eyebrow>Resultados de búsqueda</Eyebrow><h1>Buscaste <em>“{query}”</em></h1><p>{results.length+productResults.length} resultados en el catálogo.</p><div className="collection-grid">{results.map((item,index)=><CollectionCard collection={item} index={index} key={item.slug}/>)}</div>{productResults.length>0&&<div className="search-product-results"><h2>Modelos</h2>{productResults.map((item)=><Link key={item.slug} to={`/productos/${item.slug}`}>{item.name} <Icon name="arrow" size={14}/></Link>)}</div>}{results.length===0&&productResults.length===0&&<p>No hay resultados. Prueba con otra palabra.</p>}</main>
}

function NotFoundInline(){return <main className="section-wrap not-found"><Eyebrow>404 / No disponible</Eyebrow><h1>Esta página no<br/><em>está en el catálogo.</em></h1><p>Regresa al catálogo para explorar las familias y colecciones disponibles.</p><ButtonLink to="/catalogo">Volver al catálogo</ButtonLink></main>}
