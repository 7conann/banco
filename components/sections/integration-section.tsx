"use client";
import React from "react";
import { Code, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function IntegrationSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Integração Simples
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            APIs REST modernas com documentação completa e SDKs prontos
          </p>
        </div>

        {/* Cards de integração */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Code className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">APIs REST</h3>
            <p className="text-gray-600">
              Documentação completa e endpoints intuitivos para integração
              rápida
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              SDKs Prontos
            </h3>
            <p className="text-gray-600">
              Bibliotecas para as principais linguagens de programação
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Segurança</h3>
            <p className="text-gray-600">
              Protocolos de segurança avançados e criptografia de ponta a ponta
            </p>
          </div>
        </div>

        {/* Seção de código */}
        <div className="bg-gray-900 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Comece a integrar em minutos
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Nossa API foi desenvolvida pensando na experiência do
                desenvolvedor. Com documentação clara e exemplos práticos, você
                pode começar a integrar nossos serviços em questão de minutos.
              </p>
              <div className="flex flex-wrap gap-4 ">
                <Button className="bg-primary hover:bg-white text-black font-semibold">
                  Ver Documentação
                </Button>
                <Link href="/suporte">
                  <Button className="bg-white hover:bg-primary text-black font-semibold">
                    Falar com Consultor
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-green-400">
                <code>
                  <span className="text-blue-400">curl</span> -X POST
                  https://api.zicredit.com/v1/payments {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-yellow-400">-H</span>{" "}
                  <span className="text-green-300">
                    "Authorization: Bearer YOUR_API_KEY"
                  </span>{" "}
                  {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-yellow-400">-H</span>{" "}
                  <span className="text-green-300">
                    "Content-Type: application/json"
                  </span>{" "}
                  {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-yellow-400">-d</span>{" "}
                  <span className="text-green-300">{"{"}</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-green-300">"amount": 100.00,</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-green-300">"currency": "USD",</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-green-300">"method": "pix",</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-green-300">
                    "description": "Payment example"
                  </span>
                  <br />
                  &nbsp;&nbsp;<span className="text-green-300">{"}"}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
