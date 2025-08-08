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
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function SuportePage() {
  const [currentStepPf, setCurrentStepPf] = useState(1)
  const [currentStepPj, setCurrentStepPj] = useState(1)
  
  const [formPf, setFormPf] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    products: [] as string[],
    operation: ""
  });

  const [formPj, setFormPj] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    role: "",
    employees: "",
    avgBilling: "",
    products: [] as string[],
    operation: ""
  });

  const products = [
    "Banking as a Service",
    "Blockchain as a Service", 
    "Investment as a Service",
    "Soluções para Corretoras",
    "Gateway de Pagamentos",
    "Tesouraria Cripto",
    "Comércio Exterior",
    "Liquidity as a Service",
    "Emissão de cartão",
    "Tokenização",
    "White Label"
  ]

  const handleProductChange = (product: string, checked: boolean, type: 'pf' | 'pj') => {
    if (type === 'pf') {
      setFormPf(prev => ({
        ...prev,
        products: checked 
          ? [...prev.products, product]
          : prev.products.filter(p => p !== product)
      }))
    } else {
      setFormPj(prev => ({
        ...prev,
        products: checked 
          ? [...prev.products, product]
          : prev.products.filter(p => p !== product)
      }))
    }
  }

  const handlePfSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário PF Enviado:", formPf);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  const handlePjSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário PJ Enviado:", formPj);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Fale com nossos especialistas</h1>
            <p className="text-xl text-black">
              Nossa equipe entrará em contato para entender sua necessidade.
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
                        {currentStepPf === 1 && (
                          <>
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
                            <Button type="button" onClick={() => setCurrentStepPf(2)} className="w-full">
                              Próximo
                            </Button>
                          </>
                        )}

                        {currentStepPf === 2 && (
                          <>
                            <div className="space-y-4">
                              <Label className="text-base font-medium">Marque os produtos que deseja conhecer*:</Label>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {products.map((product) => (
                                  <div key={product} className="flex items-center space-x-2">
                                    <Checkbox 
                                      id={`pf-${product}`}
                                      checked={formPf.products.includes(product)}
                                      onCheckedChange={(checked) => handleProductChange(product, checked as boolean, 'pf')}
                                    />
                                    <Label htmlFor={`pf-${product}`} className="text-sm">{product}</Label>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="pf-operation">Conte mais sobre sua operação</Label>
                              <Textarea 
                                id="pf-operation" 
                                value={formPf.operation} 
                                onChange={(e) => setFormPf({ ...formPf, operation: e.target.value })}
                                rows={4}
                              />
                            </div>

                            <div className="flex gap-4">
                              <Button type="button" variant="outline" onClick={() => setCurrentStepPf(1)} className="flex-1">
                                Voltar
                              </Button>
                              <Button type="submit" className="flex-1">
                                Enviar
                              </Button>
                            </div>
                          </>
                        )}
                      </form>
                    </TabsContent>
                    
                    <TabsContent value="pj">
                      <form onSubmit={handlePjSubmit} className="space-y-6 mt-6">
                        {currentStepPj === 1 && (
                          <>
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
                            <Button type="button" onClick={() => setCurrentStepPj(2)} className="w-full">
                              Próximo
                            </Button>
                          </>
                        )}

                        {currentStepPj === 2 && (
                          <>
                            <div className="space-y-4">
                              <Label className="text-base font-medium">Marque os produtos que deseja conhecer*:</Label>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {products.map((product) => (
                                  <div key={product} className="flex items-center space-x-2">
                                    <Checkbox 
                                      id={`pj-${product}`}
                                      checked={formPj.products.includes(product)}
                                      onCheckedChange={(checked) => handleProductChange(product, checked as boolean, 'pj')}
                                    />
                                    <Label htmlFor={`pj-${product}`} className="text-sm">{product}</Label>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="pj-operation">Conte mais sobre sua operação</Label>
                              <Textarea 
                                id="pj-operation" 
                                value={formPj.operation} 
                                onChange={(e) => setFormPj({ ...formPj, operation: e.target.value })}
                                rows={4}
                              />
                            </div>

                            <div className="flex gap-4">
                              <Button type="button" variant="outline" onClick={() => setCurrentStepPj(1)} className="flex-1">
                                Voltar
                              </Button>
                              <Button type="submit" className="flex-1">
                                Enviar
                              </Button>
                            </div>
                          </>
                        )}
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
