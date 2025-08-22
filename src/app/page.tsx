"use client";

import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PricingCard from "@/components/pricing-card";
import Footer from "@/components/footer";
import { createClient } from "../../supabase/client";
import {
  BookOpen,
  Globe,
  Users,
  Lightbulb,
  ArrowUpRight,
  Leaf,
  Mountain,
  Waves,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [plans, setPlans] = useState([]);
  const [user, setUser] = useState(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);

      const { data: plans } = await supabase.functions.invoke(
        "supabase-functions-get-plans",
      );
      setPlans(plans || []);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />

      {/* Mission Section */}
      <section
        id="mission"
        className="py-24 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              To revolutionize education through immersive, interactive
              experiences that connect learners with the natural world and
              foster deep understanding of our planet's ecosystems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Perspective",
                description:
                  "Explore ecosystems from around the world through virtual reality and interactive simulations",
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Interactive Learning",
                description:
                  "Hands-on educational experiences that make complex environmental concepts accessible",
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovation Focus",
                description:
                  "Cutting-edge technology meets proven educational methodologies for maximum impact",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-gray-800/50 rounded-2xl border border-green-500/20 hover-glow backdrop-blur-sm"
              >
                <div className="text-green-400 mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Section */}
      <section
        id="activity"
        className="py-24 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Learning Activities
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Engage with nature through our carefully crafted educational
              experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mountain className="w-12 h-12" />,
                title: "Mountain Ecosystems",
                description:
                  "Journey through alpine environments and discover how life adapts to extreme conditions",
                image:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
              },
              {
                icon: <Waves className="w-12 h-12" />,
                title: "Ocean Depths",
                description:
                  "Dive into marine ecosystems and explore the mysteries of underwater life",
                image:
                  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80",
              },
              {
                icon: <Leaf className="w-12 h-12" />,
                title: "Forest Canopy",
                description:
                  "Climb through rainforest layers and understand biodiversity hotspots",
                image:
                  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80",
              },
            ].map((activity, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-green-400">
                    {activity.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-y border-green-500/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="slide-up">
              <div className="text-4xl font-bold text-green-400 mb-2">50K+</div>
              <div className="text-gray-300">Students Engaged</div>
            </div>
            <div className="slide-up">
              <div className="text-4xl font-bold text-green-400 mb-2">200+</div>
              <div className="text-gray-300">Schools Partnered</div>
            </div>
            <div className="slide-up">
              <div className="text-4xl font-bold text-green-400 mb-2">15</div>
              <div className="text-gray-300">Countries Reached</div>
            </div>
            <div className="slide-up">
              <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-black" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Educational Plans
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Choose the perfect plan for your educational institution
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans?.map((item: any) => (
              <PricingCard key={item.id} item={item} user={user} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center slide-up">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Education?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Join educators worldwide who are revolutionizing learning through
            immersive experiences.
          </p>
          <a
            href="/dashboard"
            className="inline-flex items-center px-8 py-4 text-white bg-green-600 rounded-full hover:bg-green-700 transition-all text-lg font-medium hover-glow border border-green-500/30"
          >
            Start Your Journey
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
