import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock,
  Wrench,
  Droplets,
  Search,
  Waves,
  Home,
  Building2,
  CheckCircle2,
  MapPin,
  CreditCard,
  Banknote,
  Award,
  Star,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-servico.jpg";
import logoImg from "@/assets/logo.png";
import maquinaImg from "@/assets/maquina-desentupidora.jpg";

import avatar1 from "@/assets/avatars/avatar1.jpg";
import avatar2 from "@/assets/avatars/avatar2.jpg";
import avatar3 from "@/assets/avatars/avatar3.jpg";
import avatar4 from "@/assets/avatars/avatar4.jpg";
import avatar5 from "@/assets/avatars/avatar5.jpg";
import avatar6 from "@/assets/avatars/avatar6.jpg";

const PHONE_DISPLAY = "(14) 99902-0820";
const WHATSAPP = "https://wa.me/5514999020820?text=Ol%C3%A1%20Fabiano%2C%20preciso%20de%20um%20servi%C3%A7o%20de%20desentupimento.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Desentupidora em Avaré e Região 24h | Fabiano Cavalo Encanador",
      },
      {
        name: "description",
        content:
          "Precisando de desentupidora em Avaré, Itaí, Arandu ou região? Fabiano Cavalo oferece desentupimento 24h, detecção de vazamento com geofone e encanador. Ligue!",
      },
      { property: "og:title", content: "Desentupidora em Avaré e Região 24h | Fabiano Cavalo Encanador" },
      {
        property: "og:description",
        content:
          "Precisando de desentupidora em Avaré, Itaí, Arandu ou região? Fabiano Cavalo oferece desentupimento 24h, detecção de vazamento com geofone e encanador. Ligue!",
      },
    ],
  }),
  component: Index,
});

const servicos = [
  {
    icon: Waves,
    titulo: "Desobstrução com hidrojato",
    texto: "Alta pressão que rompe raízes, gordura e entupimentos severos sem quebra-quebra.",
  },
  {
    icon: Search,
    titulo: "Detecção de vazamento",
    texto: "Geofone eletrônico localiza o ponto exato do vazamento antes de qualquer reparo.",
  },
  {
    icon: Droplets,
    titulo: "Vaso, pia e ralos",
    texto: "Vaso sanitário, pia de cozinha, quintal e qualquer desobstrução interna.",
  },
  {
    icon: Wrench,
    titulo: "Reparos hidráulicos",
    texto: "Válvulas de descarga, registros, chuveiros e pequenos reparos em geral.",
  },
  {
    icon: Home,
    titulo: "Caixa de esgoto",
    texto: "Localização, abertura, fechamento, reparo e instalação de válvula de retenção.",
  },
  {
    icon: Building2,
    titulo: "Rede de esgoto",
    texto: "Conserto de rede em casas, empresas, sítios, chácaras e fazendas.",
  },
];

const passos = [
  {
    n: "01",
    titulo: "Você chama no WhatsApp",
    texto: "Conta o problema e manda uma foto. A resposta é rápida, sem enrolação.",
  },
  {
    n: "02",
    titulo: "Diagnóstico no local",
    texto: "Equipamento certo para achar a causa real — não só o sintoma.",
  },
  {
    n: "03",
    titulo: "Problema resolvido",
    texto: "Serviço executado, área limpa e orientação para não acontecer de novo.",
  },
];

const avaliacoes = [
  {
    nome: "Marcos A.",
    cidade: "Avaré - SP",
    texto: "Chegaram em 25 minutos no sábado à tarde. Desentupiram a pia da cozinha sem sujar nada. Profissional educado e preço justo.",
    avatar: avatar1,
  },
  {
    nome: "Fernanda R.",
    cidade: "Itaí - SP",
    texto: "Vaso entupido num domingo de manhã. Atenderam pelo WhatsApp na hora. Técnico veio, resolveu, paguei só depois.",
    avatar: avatar2,
  },
  {
    nome: "Ricardo S.",
    cidade: "Arandu - SP",
    texto: "Caixa de esgoto da chácara entupida. Vieram com equipamento certo, tudo limpo em 1h. Garantia e nota fiscal.",
    avatar: avatar3,
  },
  {
    nome: "Luciana M.",
    cidade: "Avaré - SP",
    texto: "Ralo do box entupido há semanas. Resolveram em 20 minutos, sem precisar quebrar nada. Pagamento na entrega, tranquilo.",
    avatar: avatar4,
  },
  {
    nome: "Roberto F.",
    cidade: "Itaí - SP",
    texto: "Esgoto refluindo no quintal. Pensei que iam quebrar tudo. Usaram hidrojato, resolveram em 1h. Recomendo demais.",
    avatar: avatar5,
  },
  {
    nome: "Camila T.",
    cidade: "Arandu - SP",
    texto: "Liguei sábado de manhã, técnica chegou em 35 min. Pia da cozinha entupida com gordura. Limpou e ainda explicou como evitar.",
    avatar: avatar6,
  },
];

function Index() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": "Fabiano Cavalo | Desentupidora e Encanador Avaré",
    "image": "https://fabianocavalo.com.br/logo.png",
    "@id": "https://fabianocavalo.com.br/#plumbingservice",
    "url": "https://fabianocavalo.com.br",
    "telephone": "+5514999020820",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Avaré",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.1018,
      "longitude": -48.9256
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Avaré, SP" },
      { "@type": "AdministrativeArea", "name": "Arandu, SP" },
      { "@type": "AdministrativeArea", "name": "Itaí, SP" },
      { "@type": "AdministrativeArea", "name": "Barra Grande, Avaré, SP" },
      { "@type": "AdministrativeArea", "name": "Cerqueira César, SP" },
      { "@type": "AdministrativeArea", "name": "Represa de Avaré" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Barra topo */}
      <div className="bg-deep-gradient text-deep-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-center sm:justify-between px-5 py-2 text-xs font-semibold sm:text-sm">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-secondary shrink-0" />
            Atendimento em Avaré e Região — casas, empresas e zona rural
          </span>
          <span className="hidden sm:inline-flex items-center gap-2 text-secondary font-bold">
            Atendimento 24h
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-3 transition-transform hover:scale-[1.01]">
            <img
              src={logoImg}
              alt="Fabiano Cavalo Desentupidora e Encanador"
              className="h-12 sm:h-14 md:h-16 w-auto max-w-[200px] sm:max-w-[260px] object-contain drop-shadow-sm"
            />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
            <a href="#servicos" className="transition-colors hover:text-primary">Serviços</a>
            <a href="#estrutura" className="transition-colors hover:text-primary">Estrutura</a>
            <a href="#como" className="transition-colors hover:text-primary">Como funciona</a>
            <a href="#cobertura" className="transition-colors hover:text-primary">Cobertura</a>
            <a href="#avaliacoes" className="transition-colors hover:text-primary">Avaliações</a>
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-zap px-4 py-2.5 text-sm font-bold text-zap-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="size-4" />
            <span className="hidden sm:inline">Chamar agora</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-deep-gradient text-deep-foreground">
        <div className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full bg-primary/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 size-[380px] rounded-full bg-secondary/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-16 md:grid-cols-[1.05fr_0.95fr] md:pb-28 md:pt-20">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-secondary">
                <Award className="size-4" /> 12 anos de experiência e confiança
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
                Desentupidora & Encanador em Avaré e Região 24h
                <span className="mt-3 block text-secondary text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">Esgoto entupido? Resolvemos hoje sem quebra-quebra.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-deep-foreground/80 sm:text-lg">
                Especialista em desentupimento com hidrojato de alta pressão, caça vazamentos com geofone eletrônico e reparos hidráulicos em geral. Atendimento rápido em toda a região.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener"
                  className="pulse-ring inline-flex items-center gap-2 rounded-full bg-zap px-7 py-4 font-display text-base font-bold text-zap-foreground transition-transform hover:scale-[1.03]"
                >
                  <MessageCircle className="size-5" /> Falar no WhatsApp
                </a>
                <a
                  href="tel:+5514999020820"
                  className="inline-flex items-center gap-2 rounded-full border border-deep-foreground/25 px-7 py-4 font-display text-base font-bold text-deep-foreground transition-colors hover:border-secondary hover:text-secondary"
                >
                  <Phone className="size-5" /> {PHONE_DISPLAY}
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-deep-foreground/75">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-secondary" /> Atendimento rápido
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-secondary" /> Equipamento próprio
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-secondary" /> Serviço garantido
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-secondary/20 blur-2xl" />
              <img
                src={heroImg}
                alt="Profissional realizando desobstrução de esgoto com hidrojato"
                width={1408}
                height={1008}
                className="relative w-full rounded-[1.75rem] border border-deep-foreground/15 object-cover shadow-[var(--shadow-lift)]"
              />
              <div className="float-soft absolute -bottom-6 -left-4 rounded-2xl bg-card px-5 py-4 text-card-foreground shadow-[var(--shadow-lift)] sm:-left-8">
                <p className="font-display text-3xl font-extrabold text-primary">12</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  anos na estrada
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Faixa de confiança */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-5 py-10 md:grid-cols-4">
          {[
            { icon: Clock, t: "Resposta rápida", s: "Urgência atendida no mesmo dia" },
            { icon: ShieldCheck, t: "Serviço garantido", s: "Resolvido de verdade, na causa" },
            { icon: Waves, t: "Hidrojato a água", s: "Alta pressão, sem quebrar piso" },
            { icon: Search, t: "Geofone eletrônico", s: "Vazamento localizado com precisão" },
          ].map((item, i) => (
            <Reveal key={item.t} delay={i * 90}>
              <div className="px-2">
                <item.icon className="size-7 text-primary" />
                <p className="mt-3 font-display text-base font-bold text-deep">{item.t}</p>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">{item.s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
            O que fazemos
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold text-deep sm:text-4xl">
            Todo tipo de reparo em encanamento, esgoto e desentupimento
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s, i) => (
            <Reveal key={s.titulo} delay={(i % 3) * 90}>
              <article className="surface-card group h-full rounded-2xl p-7">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-gradient text-primary-foreground shadow-[var(--shadow-soft)]">
                  <s.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-deep">{s.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Estrutura */}
      <section id="estrutura" className="bg-muted/60 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <div>
              <img
                src={maquinaImg}
                alt="Máquina elétrica de desentupimento de esgoto profissional"
                loading="lazy"
                width={1200}
                height={800}
                className="w-full rounded-2xl border border-border object-cover object-center shadow-[var(--shadow-soft)]"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Estrutura própria
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-deep sm:text-4xl">
                Equipamento profissional chega junto com o técnico
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Hidrojato a água de alta pressão, geofone eletrônico e ferramenta certa para cada
                tipo de rede. Isso significa menos tempo de obra, menos quebra e o problema
                resolvido na primeira visita.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "Casa, empresa e zona rural — sítios, chácaras e fazendas",
                  "Atendimento organizado e área limpa ao final",
                  "Diagnóstico honesto antes de qualquer reparo",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-sm font-medium text-deep">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <h2 className="max-w-xl font-display text-3xl font-extrabold text-deep sm:text-4xl">
            Simples do começo ao fim
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {passos.map((p, i) => (
            <Reveal key={p.n} delay={i * 110}>
              <div className="relative h-full rounded-2xl border border-border bg-card p-7">
                <span className="font-display text-5xl font-extrabold text-primary/15">{p.n}</span>
                <h3 className="mt-2 font-display text-lg font-bold text-deep">{p.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Áreas de Atendimento */}
      <section id="cobertura" className="bg-card py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Área de Cobertura
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold text-deep sm:text-4xl">
              Atendimento rápido em Avaré, cidades vizinhas e chácaras
            </h2>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              Estrutura móvel preparada para atender com rapidez chamados residenciais, comerciais, industriais e na zona rural.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-border bg-muted/30 p-7">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-deep">Avaré - SP (Sede)</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Atendimento expresso em todos os bairros de Avaré. Chegada rápida no Centro, Bairro Alto, Barra Grande, Brabância, Paineiras, Ipiranga, Plimec, Jurumirim e demais regiões.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl border border-border bg-muted/30 p-7">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-deep">Cidades Vizinhas</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Equipe pronta para deslocamento imediato para <strong>Arandu - SP</strong>, <strong>Itaí - SP</strong>, e <strong>Cerqueira César - SP</strong>, atendendo residências e comércios locais.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="rounded-2xl border border-border bg-muted/30 p-7">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-deep">Chácaras e Represa</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Atendimento especializado em chácaras de lazer, sítios, fazendas e condomínios ao redor da <strong>Represa de Avaré</strong> (Jurumirim), como Riviera, Porto de Avaré e redondezas.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section id="avaliacoes" className="bg-muted/40 py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Reveal>
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
              AVALIAÇÕES
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-deep sm:text-4xl">
              +5 mil clientes atendidos
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto">
              Nota 4.9 no Google. Veja o que falam quando a gente termina o serviço.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
            {avaliacoes.map((item, i) => (
              <Reveal key={item.nome + item.cidade} delay={(i % 3) * 90}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <div>
                    {/* Estrelas */}
                    <div className="flex items-center gap-1 text-emerald-600">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className="size-4 fill-emerald-600 text-emerald-600" />
                      ))}
                    </div>
                    {/* Depoimento */}
                    <p className="mt-4 text-sm leading-relaxed text-foreground/90 font-normal">
                      "{item.texto}"
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.nome}
                      className="size-10 rounded-full object-cover border border-border"
                    />
                    <div>
                      <h3 className="font-display text-sm font-bold text-deep leading-tight">
                        {item.nome}
                      </h3>
                      <p className="text-xs font-medium text-muted-foreground">
                        {item.cidade}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pagamento */}
      <section className="border-y border-border bg-card py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-deep sm:text-3xl">
              Pagamento como for melhor para você
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: Droplets, t: "Pix" },
                { icon: Banknote, t: "Dinheiro" },
                { icon: CreditCard, t: "Crédito" },
                { icon: CreditCard, t: "Débito" },
              ].map((p) => (
                <span
                  key={p.t}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/70 px-5 py-2.5 text-sm font-bold text-deep"
                >
                  <p.icon className="size-4 text-primary" /> {p.t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden bg-deep-gradient py-20 text-deep-foreground md:py-24">
        <div className="pointer-events-none absolute -right-20 top-0 size-80 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[1fr_auto]">
          <Reveal>
            <div>
              <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
                Não deixe o entupimento virar prejuízo
              </h2>
              <p className="mt-4 max-w-xl text-base text-deep-foreground/80">
                Chame agora e fale direto com o Fabiano. Atendimento em Avaré e região.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 rounded-full bg-secondary px-8 py-5 font-display text-lg font-extrabold text-secondary-foreground transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="size-6" /> {PHONE_DISPLAY}
            </a>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
          <a href="#top" className="transition-transform hover:scale-[1.02]">
            <img
              src={logoImg}
              alt="Logotipo Oficial Fabiano Cavalo"
              loading="lazy"
              className="h-20 sm:h-24 md:h-28 w-auto max-w-[300px] object-contain drop-shadow-sm"
            />
          </a>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Desentupidora & Encanador 24h
          </p>
          <p className="max-w-md text-sm text-muted-foreground">
            Desentupidora de esgotos, encanador e detecção de vazamento com geofone — 12 anos de experiência.
          </p>
          <p className="text-xs text-muted-foreground pt-2">
            © {new Date().getFullYear()} Fabiano Cavalo. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener"
        aria-label="Falar no WhatsApp"
        className="pulse-ring fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-zap text-zap-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-110"
      >
        <MessageCircle className="size-7" />
      </a>
    </div>
  );
}
