"use client"

import Link from "next/link"
import { useState } from "react"
import { FileText, Users, Truck, TrendingUp, Plus, Search, Bell, Settings } from "lucide-react"

export default function Home() {
  const [stats, setStats] = useState({
    faturas: 1234,
    fornecedores: 89,
    transportadoras: 23,
    total: 45231,
  })

  const [recentActivity] = useState([
    { id: 1, type: "fatura", description: "Nova fatura FAT-001 criada", time: "2 min atrás" },
    { id: 2, type: "fornecedor", description: "Fornecedor ABC Lda atualizado", time: "15 min atrás" },
    { id: 3, type: "pagamento", description: "Pagamento de €2,500 processado", time: "1 hora atrás" },
  ])

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="glass rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">Sistema de Faturas</h1>
              <p className="text-gray-400 text-lg">Gestão inteligente e moderna de faturas</p>
            </div>
            <div className="flex gap-3">
              <button className="glass p-3 rounded-xl hover-lift">
                <Bell className="w-5 h-5 text-blue-400" />
              </button>
              <button className="glass p-3 rounded-xl hover-lift">
                <Search className="w-5 h-5 text-blue-400" />
              </button>
              <button className="glass p-3 rounded-xl hover-lift">
                <Settings className="w-5 h-5 text-blue-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="glass rounded-2xl p-6 hover-lift card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-blue-500/20">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stats.faturas.toLocaleString()}</div>
            <div className="text-gray-400 text-sm">Total de Faturas</div>
            <div className="text-green-400 text-xs mt-2">+12% este mês</div>
          </div>

          <div className="glass rounded-2xl p-6 hover-lift card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-purple-500/20">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stats.fornecedores}</div>
            <div className="text-gray-400 text-sm">Fornecedores</div>
            <div className="text-green-400 text-xs mt-2">+5% este mês</div>
          </div>

          <div className="glass rounded-2xl p-6 hover-lift card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-pink-500/20">
                <Truck className="w-6 h-6 text-pink-400" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stats.transportadoras}</div>
            <div className="text-gray-400 text-sm">Transportadoras</div>
            <div className="text-green-400 text-xs mt-2">Sem alterações</div>
          </div>

          <div className="glass rounded-2xl p-6 hover-lift card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-green-500/20">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">€{stats.total.toLocaleString()}</div>
            <div className="text-gray-400 text-sm">Valor Total</div>
            <div className="text-green-400 text-xs mt-2">+8% este mês</div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link href="/faturas" className="glass rounded-2xl p-8 hover-lift card-hover block group">
            <div className="flex items-center justify-between mb-6">
              <div className="p-4 rounded-2xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
              <Plus className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">📄 Faturas</h2>
            <p className="text-gray-400 mb-4">Gerir todas as suas faturas de forma inteligente</p>
            <div className="flex items-center text-blue-400 text-sm font-medium">
              Ver faturas
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link href="/fornecedores" className="glass rounded-2xl p-8 hover-lift card-hover block group">
            <div className="flex items-center justify-between mb-6">
              <div className="p-4 rounded-2xl bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <Plus className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">🏢 Fornecedores</h2>
            <p className="text-gray-400 mb-4">Gestão completa da sua rede de fornecedores</p>
            <div className="flex items-center text-purple-400 text-sm font-medium">
              Ver fornecedores
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link href="/transportadoras" className="glass rounded-2xl p-8 hover-lift card-hover block group">
            <div className="flex items-center justify-between mb-6">
              <div className="p-4 rounded-2xl bg-pink-500/20 group-hover:bg-pink-500/30 transition-colors">
                <Truck className="w-8 h-8 text-pink-400" />
              </div>
              <Plus className="w-6 h-6 text-gray-400 group-hover:text-pink-400 transition-colors" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">🚛 Transportadoras</h2>
            <p className="text-gray-400 mb-4">Controle total sobre suas transportadoras</p>
            <div className="flex items-center text-pink-400 text-sm font-medium">
              Ver transportadoras
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Atividade Recente</h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <div className="flex-1">
                  <p className="text-white font-medium">{activity.description}</p>
                  <p className="text-gray-400 text-sm">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
