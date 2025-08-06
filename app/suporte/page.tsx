"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SuportePage() {
  const [formPf, setFormPf] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const [formPj, setFormPj] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    role: "",
    employees: "",
    avgBilling: "",
  });

  const handlePfSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário PF Enviado:", formPf);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    // Reset form
  };

  const handlePjSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário PJ Enviado:", formPj);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    // Reset form
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Fale com nossos especialistas</h1>
            <p className="text-xl text-gray-600">
              Preencha o formulário e nossa equipe entrará em contato para entender sua necessidade.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                  <CardDescription>Selecione se você é Pessoa Física ou Jurídica.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="pf" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="pf">Pessoa Física</TabsTrigger>
                      <TabsTrigger value="pj">Pessoa Jurídica</TabsTrigger>
                    </TabsList>
                    <TabsContent value="pf">
                      <form onSubmit={handlePfSubmit} className="space-y-6 mt-6">
                        <div className="space-y-2">
                          <Label htmlFor="pf-name">Nome</Label>
                          <Input id="pf-name" value={formPf.name} onChange={(e) => setFormPf({ ...formPf, name: e.target.value })} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pf-email">E-mail</Label>
                          <Input id="pf-email" type="email" value={formPf.email} onChange={(e) => setFormPf({ ...formPf, email: e.target.value })} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pf-phone">Telefone</Label>
                          <Input id="pf-phone" value={formPf.phone} onChange={(e) => setFormPf({ ...formPf, phone: e.target.value })} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pf-city">Cidade</Label>
                          <Input id="pf-city" value={formPf.city} onChange={(e) => setFormPf({ ...formPf, city: e.target.value })} required />
                        </div>
                        <Button type="submit" className="w-full">Enviar</Button>
                      </form>
                    </TabsContent>
                    <TabsContent value="pj">
                      <form onSubmit={handlePjSubmit} className="space-y-6 mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="pj-name">Nome</Label>
                            <Input id="pj-name" value={formPj.name} onChange={(e) => setFormPj({ ...formPj, name: e.target.value })} required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="pj-phone">Número</Label>
                            <Input id="pj-phone" value={formPj.phone} onChange={(e) => setFormPj({ ...formPj, phone: e.target.value })} required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pj-email">E-mail Corporativo</Label>
                          <Input id="pj-email" type="email" value={formPj.email} onChange={(e) => setFormPj({ ...formPj, email: e.target.value })} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pj-company">Nome da Empresa</Label>
                          <Input id="pj-company" value={formPj.companyName} onChange={(e) => setFormPj({ ...formPj, companyName: e.target.value })} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pj-role">Sua Função na Empresa</Label>
                          <Input id="pj-role" value={formPj.role} onChange={(e) => setFormPj({ ...formPj, role: e.target.value })} required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="pj-employees">Número de Funcionários</Label>
                            <Input id="pj-employees" value={formPj.employees} onChange={(e) => setFormPj({ ...formPj, employees: e.target.value })} required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="pj-billing">Faturamento Médio da Empresa</Label>
                            <Input id="pj-billing" value={formPj.avgBilling} onChange={(e) => setFormPj({ ...formPj, avgBilling: e.target.value })} required />
                          </div>
                        </div>
                        <Button type="submit" className="w-full">Enviar</Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
